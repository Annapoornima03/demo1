import React, { useEffect, useState } from 'react';

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    category: 'Main Course',
    price: '',
    description: '',
    isAvailable: true
  });

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = () => {
    fetch('https://project1-9j7m.onrender.com/api/menu')
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch menu');
        return response.json();
      })
      .then(data => {
        setMenuItems(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Fetch error:', error);
        setLoading(false);
      });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://project1-9j7m.onrender.com/api/menu', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to create item');
        return res.json();
      })
      .then(data => {
        setShowPopup(false);
        setFormData({
          name: '',
          category: 'Main Course',
          price: '',
          description: '',
          isAvailable: true
        });
        fetchMenuItems(); // refresh list
      })
      .catch(err => console.error('Error creating item:', err));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Our Menu</h1>

      <div className="text-center mb-6">
        <button
          className="bg-violet-600 text-white px-5 py-2 rounded hover:bg-violet-700"
          onClick={() => setShowPopup(true)}
        >
          + Create Menu Item
        </button>
      </div>

      {loading ? (
        <div className="text-center text-gray-600">Loading menu...</div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {menuItems.map(item => (
            <div key={item._id} className="bg-white rounded-2xl shadow p-5 hover:shadow-xl transition">
              <h2 className="text-xl font-semibold text-violet-700">{item.name}</h2>
              <p className="text-sm text-gray-500 mb-1">{item.category}</p>
              <p className="text-gray-700 mb-2">{item.description}</p>
              <p className="text-lg font-bold text-green-600">₹{item.price}</p>
              <p className={`text-sm mt-2 ${item.isAvailable ? 'text-green-500' : 'text-red-500'}`}>
                {item.isAvailable ? 'Available' : 'Not Available'}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl w-[90%] max-w-md shadow-lg relative">
            <h2 className="text-2xl font-bold mb-4">Create New Menu Item</h2>

            <label className="block mb-2">
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-2 mt-1 border rounded"
              />
            </label>

            <label className="block mb-2">
              Category:
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full p-2 mt-1 border rounded"
              >
                <option>Starter</option>
                <option>Main Course</option>
                <option>Dessert</option>
                <option>Beverage</option>
                <option>Snack</option>
              </select>
            </label>

            <label className="block mb-2">
              Price (₹):
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                required
                className="w-full p-2 mt-1 border rounded"
              />
            </label>

            <label className="block mb-2">
              Description:
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full p-2 mt-1 border rounded"
              />
            </label>

            <label className="block mb-4">
              <input
                type="checkbox"
                name="isAvailable"
                checked={formData.isAvailable}
                onChange={handleInputChange}
                className="mr-2"
              />
              Available
            </label>

            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => setShowPopup(false)}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default MenuPage;
