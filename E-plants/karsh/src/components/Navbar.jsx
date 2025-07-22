// src/Navbars.js
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiSearch, FiX, FiPlus, FiMinus } from 'react-icons/fi';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useCart } from "./Cart";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Navbars = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showPincodeModal, setShowPincodeModal] = useState(false);
  const [pincode, setPincode] = useState("");
  const [showCart, setShowCart] = useState(false);
  
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity,
    getTotalItems,
    getTotalPrice 
  } = useCart();

  // componentWillMount implementation
  useEffect(() => {
    // Check for saved pincode
    const savedPincode = localStorage.getItem('userPincode');
    if (savedPincode) {
      setPincode(savedPincode);
      setShowPincodeModal(false);
    }

    // Check if page was refreshed
    const wasRefreshed = sessionStorage.getItem('wasRefreshed');
    if (wasRefreshed) {
      alert(`Welcome back! Your current pincode is: ${savedPincode || "not set"}`);
      sessionStorage.removeItem('wasRefreshed');
    }

    // Set up beforeunload listener for refresh detection
    const handleBeforeUnload = () => {
      sessionStorage.setItem('wasRefreshed', 'true');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup function (componentWillUnmount equivalent)
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const handlePincodeSubmit = () => {
    if (pincode.length === 6) {
      localStorage.setItem('userPincode', pincode);
      setShowPincodeModal(false);
      alert(`Pincode ${pincode} saved successfully!`);
    } else {
      alert("Please enter a valid 6-digit pincode");
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <>
      {/* Pincode Modal */}
      <Modal 
        show={showPincodeModal} 
        onHide={() => {}} 
        backdrop="static" 
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Welcome to Green Heaven</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please enter your 6-digit pincode to check product availability in your area:</p>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="e.g. 560001"
            value={pincode}
            onChange={(e) => setPincode(e.target.value.replace(/\D/g, '').slice(0, 6))}
            maxLength={6}
          />
          <div className="d-grid">
            <Button 
              variant="success" 
              onClick={handlePincodeSubmit}
              disabled={pincode.length !== 6}
            >
              Confirm Pincode
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{color:'black'}}>🌱Green Heaven</Link>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/" style={{color:'black'}}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={{color:'black'}}>About</Link>
              </li>
              
              <li className="nav-item dropdown">
                <Link 
                  className="nav-link dropdown-toggle" 
                  to="/plants" 
                  id="navbarDropdownPlants"
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                  style={{color:'black'}}
                >
                  Plants
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownPlants">
                  <li><Link className="dropdown-item" to="/plants/indoor">Indoor Plants</Link></li>
                  <li><Link className="dropdown-item" to="/plants/outdoor">Outdoor Plants</Link></li>
                  <li><Link className="dropdown-item" to="/plants/flowering">Flowering Plants</Link></li>
                  <li><Link className="dropdown-item" to="/plants/succulents">Succulents</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link 
                  className="nav-link dropdown-toggle" 
                  to="/potsTools" 
                  id="navbarDropdownPots"
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                  style={{color:'black'}}
                >
                  Pots & Tools
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownPots">
                  <li><Link className="dropdown-item" to="/pots-tools/plantpots">Plant Pots</Link></li>
                  <li><Link className="dropdown-item" to="/pots-tools/gardening-tools">Gardening Tools</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link 
                  className="nav-link dropdown-toggle" 
                  to="/seeds" 
                  id="navbarDropdownSeeds"
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                  style={{color:'black'}}
                >
                  Seeds
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownSeeds">
                  <li><Link className="dropdown-item" to="/seeds/vegetable">Vegetable Seeds</Link></li>
                  <li><Link className="dropdown-item" to="/seeds/flower">Flower Seeds</Link></li>
                  <li><Link className="dropdown-item" to="/seeds/fruit">Fruit Seeds</Link></li>
                </ul>
              </li>
              
              <li className="nav-item dropdown">
                <Link 
                  className="nav-link dropdown-toggle" 
                  to="/fertilizers" 
                  id="navbarDropdownFertilizers"
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                  style={{color:'black'}}
                >
                  Fertilizers
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownFertilizers">
                  <li><Link className="dropdown-item" to="/fertilizers/organic">Organic</Link></li>
                  <li><Link className="dropdown-item" to="/fertilizers/liquid">Liquid</Link></li>
                  <li><Link className="dropdown-item" to="/fertilizers/granular">Granular</Link></li>
                </ul>
              </li>
        
              <li className="nav-item">
                <Link className="nav-link" to="/login" style={{color:'black'}}>Login</Link>
              </li>
            </ul>

            <div className="d-flex">
              <form className="d-flex me-3" onSubmit={handleSearch}>
                <div className="input-group">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button className="btn btn-outline-success" type="submit">
                    <FiSearch />
                  </button>
                </div>
              </form>

              <button 
                onClick={() => setShowCart(true)} 
                className="btn btn-outline-success position-relative"
              >
                <FiShoppingCart />
                {getTotalItems() > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {getTotalItems()}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Cart Offcanvas */}
      <Offcanvas show={showCart} onHide={() => setShowCart(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartItems.length === 0 ? (
            <div className="text-center py-4">
              <p>Your cart is empty</p>
              <Link to="/plants" className="btn btn-success" onClick={() => setShowCart(false)}>
                Browse Plants
              </Link>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map(item => (
                  <div key={item.id} className="cart-item mb-3 p-2 border-bottom">
                    <div className="d-flex align-items-center">
                      <img 
                        src={item.imageUrl || 'https://via.placeholder.com/60'} 
                        alt={item.title}
                        className="me-3 rounded"
                        style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                      />
                      <div className="flex-grow-1">
                        <h6 className="mb-1">{item.title}</h6>
                        <p className="mb-1">₹{item.price?.toFixed(2)}</p>
                        <div className="d-flex align-items-center">
                          <button 
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <FiMinus size={14} />
                          </button>
                          <span className="mx-2">{item.quantity}</span>
                          <button 
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <FiPlus size={14} />
                          </button>
                        </div>
                      </div>
                      <button 
                        className="btn btn-sm btn-outline-danger ms-2"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <FiX size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="cart-summary mt-4 pt-3 border-top">
                <div className="d-flex justify-content-between mb-2">
                  <h5>Total:</h5>
                  <h5>₹{getTotalPrice().toFixed(2)}</h5>
                </div>
                <Link 
                  to="/checkout" 
                  className="btn btn-success w-100"
                  onClick={() => setShowCart(false)}
                >
                  Proceed to Checkout
                </Link>
              </div>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navbars;