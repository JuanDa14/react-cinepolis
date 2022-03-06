import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { inactiveSessionUser } from "../../actions/authAction";
import useForm from "../../hooks/useForm";
import ListAnimes from "../films/ListAnimes";

const NavbarScreen = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [{ search }, handleInputChange, reset] = useForm({ search: "" });

  const handleLogout = () => {
    dispatch(inactiveSessionUser());
  };

  const handleSearch = (e) => {
    e.preventDefault();
    reset();
    navigate(`search?q=${search}`);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light background-color-1">
        <div className="container">
          <p className="navbar-brand text-light">Cinepolis</p>
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
              <Link to="/" className="nav-link text-light">
                Home
              </Link>
              <Link to="/favorites" className="nav-link text-light">
                Favorites
              </Link>
              <button
                className="nav-link btn-edit text-light"
                onClick={handleLogout}
              >
                Logout
              </button>
            </ul>
            <form onSubmit={handleSearch}>
              <div className="input-group">
                <input
                  type="text"
                  name="search"
                  className="input-edit"
                  placeholder="Search..."
                  onChange={handleInputChange}
                  value={search}
                />
                <button type="submit" className="input-group-text icon pointer">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </nav>
      <ListAnimes />
    </>
  );
};

export default NavbarScreen;
