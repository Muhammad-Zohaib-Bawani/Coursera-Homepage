import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Input } from "antd";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";




const Navbar = () => {
  const [activeLink, setActiveLink] = useState("individuals");
  const [isNavbarCollapsed, setNavbarCollapsed] = useState(true);
  const [isSearchVisible, setSearchVisible] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleNavbarToggle = () => {
    setNavbarCollapsed(!isNavbarCollapsed);
    setSearchVisible(false); // Hide search input when navbar toggles
  };

  const handleSearchToggle = () => {
    setSearchVisible(!isSearchVisible);
    setNavbarCollapsed(true); // Collapse navbar when search is toggled
  };

  return (
    <div style={{ borderBottom: "1px solid rgba(0, 0, 0, .12)" }}>
      <div className="top-bar">
        <div className="" style={{ padding: "0 48px" }}>
          <div className="row">
            <div>
              <ul
                className="css-f31nvc"
                style={{ display: "flex", listStyle: "none", padding: 0 }}
              >
                <li className="css-1dswftd">
                  <a
                    className={`topnav-link ${
                      activeLink === "individuals" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("individuals")}
                    href="#"
                  >
                    <span>
                      <span className="forStyle css-jawg1x">For</span>{" "}
                      Individuals
                    </span>
                  </a>
                </li>
                <li className="css-1dswftd">
                  <a
                    className={`topnav-link ${
                      activeLink === "businesses" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("businesses")}
                    href="#"
                  >
                    <span>
                      <span className="forStyle css-jawg1x">For</span>{" "}
                      Businesses
                    </span>
                  </a>
                </li>
                <li className="css-1dswftd">
                  <a
                    className={`topnav-link ${
                      activeLink === "universities" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("universities")}
                    href="#"
                  >
                    <span>
                      <span className="forStyle css-jawg1x">For</span>{" "}
                      Universities
                    </span>
                  </a>
                </li>
                <li className="css-1dswftd">
                  <a
                    className={`topnav-link ${
                      activeLink === "governments" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("governments")}
                    href="#"
                  >
                    <span>
                      <span className="forStyle css-jawg1x">For</span>{" "}
                      Governments
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container sticky-top">
        <nav className="navbar align-items-center main-nav">
          {/* Logo */}
          <a href="#" className="navbar-brand">
            <img
              style={{ width: "127px", height: "32px" }}
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZpZXdCb3g9IjAgMCAxMTU1IDE2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiPjxwYXRoIGQ9Ik0xNTkuNzUgODEuNTRjMC00NC40OSAzNi42My04MC40NyA4Mi40My04MC40NyA0Ni4xMiAwIDgyLjc2IDM2IDgyLjc2IDgwLjQ3IDAgNDQuMTYtMzYuNjQgODAuOC04Mi43NiA4MC44LTQ1LjggMC04Mi40My0zNi42OC04Mi40My04MC44em0xMjUuNjEgMGMwLTIyLjI0LTE5LjMtNDEuODctNDMuMTgtNDEuODctMjMuNTUgMC00Mi44NSAxOS42My00Mi44NSA0MS44NyAwIDIyLjU3IDE5LjMgNDIuMiA0Mi44NSA0Mi4yIDIzLjkyIDAgNDMuMTgtMTkuNjMgNDMuMTgtNDIuMnptNzA1LjYzIDEuMzFjMC00OC43NCAzOS41OC04MS43OCA3NS41Ny04MS43OCAyNC41MyAwIDM4LjYgNy41MiA0OC4wOCAyMS45MmwzLjc3LTE5aDM2Ljc5djE1NS40aC0zNi43OWwtNC43NS0xNmMtMTAuNzkgMTEuNzgtMjQuMjEgMTktNDcuMSAxOS0zNS4zMy0uMDUtNzUuNTctMzEuMTMtNzUuNTctNzkuNTR6bTEyNS42MS0uMzNjLS4wOS0yMy41MjctMTkuNDctNDIuODM1LTQzLTQyLjgzNS0yMy41OSAwLTQzIDE5LjQxMS00MyA0M3YuMTY1YzAgMjEuNTkgMTkuMyA0MC44OSA0Mi44NiA0MC44OSAyMy44NSAwIDQzLjE0LTE5LjMgNDMuMTQtNDEuMjJ6TTk0NS43OCAyMlY0aC00MC4yM3YxNTUuMzloNDAuMjNWNzUuNjZjMC0yNS4xOSAxMi40NC0zOC4yNyAzNC0zOC4yNyAxLjQzIDAgMi43OS4xIDQuMTIuMjNMOTkxLjM2LjExYy0yMC45Ny4xMS0zNi4xNyA3LjMtNDUuNTggMjEuODl6bS00MDQuMjcuMDF2LTE4bC00MC4yMy4wOS4zNCAxNTUuMzcgNDAuMjMtLjA5LS4yMi04My43MmMtLjA2LTI1LjE4IDEyLjM1LTM4LjI5IDMzLjkzLTM4LjM0IDEuMzc2LjAwNCAyLjc1Mi4wODEgNC4xMi4yM0w1ODcuMSAwYy0yMSAuMTctMzYuMjIgNy4zOS00NS41OSAyMi4wMXpNMzM4Ljg4IDk5LjJWNC4wMWg0MC4yMlY5NC4zYzAgMTkuOTUgMTEuMTIgMzEuNzMgMzAuNDIgMzEuNzMgMjEuNTkgMCAzNC0xMy4wOSAzNC0zOC4yOFY0LjAxaDQwLjI0djE1NS4zOGgtNDAuMjF2LTE4Yy05LjQ4IDE0LjcyLTI0Ljg2IDIxLjkyLTQ2LjEyIDIxLjkyLTM1Ljk4LjAxLTU4LjU1LTI2LjE2LTU4LjU1LTY0LjExem0zOTEuNzQtMTcuNDhjLjA5LTQzLjUxIDMxLjIzLTgwLjc0IDgwLjYyLTgwLjY1IDQ1LjguMDkgNzguMTEgMzYuNzggNzggODAgLjAxIDQuMjczLS4zMyA4LjU0LTEgMTIuNzZsLTExOC40MS0uMjJjNC41NCAxOC42NSAxOS44OSAzMi4wOSA0My4xMiAzMi4xNCAxNC4wNiAwIDI5LjEyLTUuMTggMzguMy0xNi45NGwyNy40NCAyMmMtMTQuMTEgMTkuOTMtMzkgMzEuNjYtNjUuNDggMzEuNjEtNDYuNzUtLjE2LTgyLjY3LTM1LjIzLTgyLjU5LTgwLjd6bTExOC4xMi0xNi4xNGMtMi4yNi0xNS43LTE4LjU5LTI3Ljg0LTM3Ljg5LTI3Ljg3LTE4LjY1IDAtMzMuNzEgMTEuMDYtMzkuNjMgMjcuNzNsNzcuNTIuMTR6bS0yNjEuNCA1OS45NGwzNS43Ni0xOC43MmM1LjkxIDEyLjgxIDE3LjczIDIwLjM2IDM0LjQ4IDIwLjM2IDE1LjQzIDAgMjEuMzQtNC45MiAyMS4zNC0xMS44MiAwLTI1LTg0LjcxLTkuODUtODQuNzEtNjcgMC0zMS41MiAyNy41OC00OC4yNiA2MS43Mi00OC4yNiAyNS45NCAwIDQ4LjkyIDExLjQ5IDYxLjQgMzIuODNsLTM1LjQ0IDE4Ljc1Yy01LjI1LTEwLjUxLTE1LjEtMTYuNDItMjcuNTgtMTYuNDItMTIuMTQgMC0xOC4wNiA0LjI3LTE4LjA2IDExLjQ5IDAgMjQuMyA4NC43MSA4Ljg3IDg0LjcxIDY3IDAgMzAuMjEtMjQuNjIgNDguNTktNjQuMzUgNDguNTktMzMuODItLjAzLTU3LjQ2LTExLjE5LTY5LjI3LTM2Ljh6TTAgODEuNTRDMCAzNi43MyAzNi42My43NCA4Mi40My43NGMyNy45NDctLjE5NiA1NC4xODIgMTMuNzM3IDY5LjY3IDM3bC0zNC4zNCAxOS45MmE0Mi45NzIgNDIuOTcyIDAgMDAtMzUuMzMtMTguMzJjLTIzLjU1IDAtNDIuODUgMTkuNjMtNDIuODUgNDIuMiAwIDIyLjU3IDE5LjMgNDIuMiA0Mi44NSA0Mi4yYTQyLjUwMiA0Mi41MDIgMCAwMDM2LjMxLTIwbDM0IDIwLjI4Yy0xNS4zMDcgMjMuOTU1LTQxLjkwMiAzOC40MzEtNzAuMzMgMzguMjhDMzYuNjMgMTYyLjM0IDAgMTI1LjY2IDAgODEuNTR6IiBmaWxsPSIjMDA1NkQyIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4="
              alt="logo"
            />
          </a>

          <div className="d-flex">
            <div className="input-group">
              <div className="input-group-prepend">
                <button
                  className="btn btn-outline-primary dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Explore
                </button>
                <div
                  className="dropdown-menu"
                  style={{ maxHeight: "600px", overflowY: "auto" }}
                >
                  <div className="container">
                    <h4>Goals</h4>
                    <a className="dropdown-item" href="#">
                      Take a free Course
                    </a>
                    <a className="dropdown-item" href="#">
                      Earn a Degree
                    </a>
                    <a className="dropdown-item" href="#">
                      Earn a Certificate
                    </a>
                    <a className="dropdown-item" href="#">
                      Find a free course
                    </a>

                    <h4 className="mt-4">Subjects</h4>
                    <a className="dropdown-item" href="#">
                      Data Science
                    </a>
                    <a className="dropdown-item" href="#">
                      Business
                    </a>
                    <a className="dropdown-item" href="#">
                      Computer Science
                    </a>
                    <a className="dropdown-item" href="#">
                      Information Technology
                    </a>
                    <a className="dropdown-item" href="#">
                      Language Learning
                    </a>
                    <a className="dropdown-item" href="#">
                      Health
                    </a>
                    <a className="dropdown-item" href="#">
                      Personal Development
                    </a>
                    <a className="dropdown-item" href="#">
                      Physical Science and Engineering
                    </a>
                    <a className="dropdown-item" href="#">
                      Social Sciences
                    </a>
                    <a className="dropdown-item" href="#">
                      Arts and Humanities
                    </a>
                    <a className="dropdown-item" href="#">
                      Math and Logic
                    </a>

                    <button className="btn btn-primary mt-5">
                      Browse all subjects
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              position: "relative",
              borderRadius: "25px",
              overflow: "hidden",
            }}
          >
            <Input
              placeholder="What do you want to learn?"
              suffix={<SearchOutlined />}
              style={{
                borderRadius: "25px",
                paddingLeft: "40px",
                height: "44px",
              }}
              className="navbarInput"
            />
          </div>

          <div className="d-flex last-nav align-items-center">
            <ul
              style={{
                display: "flex",
                listStyle: "none",
                padding: 0,
                margin: 0,
                alignItems: "center",
              }}
              className="nav-links"
            >
              <li className="mx-2">Online Degrees</li>
              <li className="mx-2">Find your New Career</li>
              <li className="mx-2" style={{ color: "#0056D2" }}>
                Log In
              </li>
              <li className="mx-2">
                <button className="btn btn-outline-primary">
                  Join for Free
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <nav className="navbar navbar-expand-lg sec-nav sticky-top">
          {/* Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleNavbarToggle}
            aria-controls="navbarMobileMenu"
            aria-label="Toggle navigation"
          >
            {isNavbarCollapsed ? (
              <span className="navbar-toggler-icon"></span>
            ) : (
              <CloseOutlined style={{ fontSize: "24px" }} />
            )}
          </button>

          {/* Logo in the center */}
          <a className="navbar-brand mx-auto" href="#">
            <img
              style={{ width: "100px", height: "32px" }}
              alt="Logo"
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZpZXdCb3g9IjAgMCAxMTU1IDE2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiPjxwYXRoIGQ9Ik0xNTkuNzUgODEuNTRjMC00NC40OSAzNi42My04MC40NyA4Mi40My04MC40NyA0Ni4xMiAwIDgyLjc2IDM2IDgyLjc2IDgwLjQ3IDAgNDQuMTYtMzYuNjQgODAuOC04Mi43NiA4MC44LTQ1LjggMC04Mi40My0zNi42OC04Mi40My04MC44em0xMjUuNjEgMGMwLTIyLjI0LTE5LjMtNDEuODctNDMuMTgtNDEuODctMjMuNTUgMC00Mi44NSAxOS42My00Mi44NSA0MS44NyAwIDIyLjU3IDE5LjMgNDIuMiA0Mi44NSA0Mi4yIDIzLjkyIDAgNDMuMTgtMTkuNjMgNDMuMTgtNDIuMnptNzA1LjYzIDEuMzFjMC00OC43NCAzOS41OC04MS43OCA3NS41Ny04MS43OCAyNC41MyAwIDM4LjYgNy41MiA0OC4wOCAyMS45MmwzLjc3LTE5aDM2Ljc5djE1NS40aC0zNi43OWwtNC43NS0xNmMtMTAuNzkgMTEuNzgtMjQuMjEgMTktNDcuMSAxOS0zNS4zMy0uMDUtNzUuNTctMzEuMTMtNzUuNTctNzkuNTR6bTEyNS42MS0uMzNjLS4wOS0yMy41MjctMTkuNDctNDIuODM1LTQzLTQyLjgzNS0yMy41OSAwLTQzIDE5LjQxMS00MyA0M3YuMTY1YzAgMjEuNTkgMTkuMyA0MC44OSA0Mi44NiA0MC44OSAyMy44NSAwIDQzLjE0LTE5LjMgNDMuMTQtNDEuMjJ6TTk0NS43OCAyMlY0aC00MC4yM3YxNTUuMzloNDAuMjNWNzUuNjZjMC0yNS4xOSAxMi40NC0zOC4yNyAzNC0zOC4yNyAxLjQzIDAgMi43OS4xIDQuMTIuMjNMOTkxLjM2LjExYy0yMC45Ny4xMS0zNi4xNyA3LjMtNDUuNTggMjEuODl6bS00MDQuMjcuMDF2LTE4bC00MC4yMy4wOS4zNCAxNTUuMzcgNDAuMjMtLjA5LS4yMi04My43MmMtLjA2LTI1LjE4IDEyLjM1LTM4LjI5IDMzLjkzLTM4LjM0IDEuMzc2LjAwNCAyLjc1Mi4wODEgNC4xMi4yM0w1ODcuMSAwYy0yMSAuMTctMzYuMjIgNy4zOS00NS41OSAyMi4wMXpNMzM4Ljg4IDk5LjJWNC4wMWg0MC4yMlY5NC4zYzAgMTkuOTUgMTEuMTIgMzEuNzMgMzAuNDIgMzEuNzMgMjEuNTkgMCAzNC0xMy4wOSAzNC0zOC4yOFY0LjAxaDQwLjI0djE1NS4zOGgtNDAuMjF2LTE4Yy05LjQ4IDE0LjcyLTI0Ljg2IDIxLjkyLTQ2LjEyIDIxLjkyLTM1Ljk4LjAxLTU4LjU1LTI2LjE2LTU4LjU1LTY0LjExem0zOTEuNzQtMTcuNDhjLjA5LTQzLjUxIDMxLjIzLTgwLjc0IDgwLjYyLTgwLjY1IDQ1LjguMDkgNzguMTEgMzYuNzggNzggODAgLjAxIDQuMjczLS4zMyA4LjU0LTEgMTIuNzZsLTExOC40MS0uMjJjNC41NCAxOC42NSAxOS44OSAzMi4wOSA0My4xMiAzMi4xNCAxNC4wNiAwIDI5LjEyLTUuMTggMzguMy0xNi45NGwyNy40NCAyMmMtMTQuMTEgMTkuOTMtMzkgMzEuNjYtNjUuNDggMzEuNjEtNDYuNzUtLjE2LTgyLjY3LTM1LjIzLTgyLjU5LTgwLjd6bTExOC4xMi0xNi4xNGMtMi4yNi0xNS43LTE4LjU5LTI3Ljg0LTM3Ljg5LTI3Ljg3LTE4LjY1IDAtMzMuNzEgMTEuMDYtMzkuNjMgMjcuNzNsNzcuNTIuMTR6bS0yNjEuNCA1OS45NGwzNS43Ni0xOC43MmM1LjkxIDEyLjgxIDE3LjczIDIwLjM2IDM0LjQ4IDIwLjM2IDE1LjQzIDAgMjEuMzQtNC45MiAyMS4zNC0xMS44MiAwLTI1LTg0LjcxLTkuODUtODQuNzEtNjcgMC0zMS41MiAyNy41OC00OC4yNiA2MS43Mi00OC4yNiAyNS45NCAwIDQ4LjkyIDExLjQ5IDYxLjQgMzIuODNsLTM1LjQ0IDE4Ljc1Yy01LjI1LTEwLjUxLTE1LjEtMTYuNDItMjcuNTgtMTYuNDItMTIuMTQgMC0xOC4wNiA0LjI3LTE4LjA2IDExLjQ5IDAgMjQuMyA4NC43MSA4Ljg3IDg0LjcxIDY3IDAgMzAuMjEtMjQuNjIgNDguNTktNjQuMzUgNDguNTktMzMuODItLjAzLTU3LjQ2LTExLjE5LTY5LjI3LTM2Ljh6TTAgODEuNTRDMCAzNi43MyAzNi42My43NCA4Mi40My43NGMyNy45NDctLjE5NiA1NC4xODIgMTMuNzM3IDY5LjY3IDM3bC0zNC4zNCAxOS45MmE0Mi45NzIgNDIuOTcyIDAgMDAtMzUuMzMtMTguMzJjLTIzLjU1IDAtNDIuODUgMTkuNjMtNDIuODUgNDIuMiAwIDIyLjU3IDE5LjMgNDIuMiA0Mi44NSA0Mi4yYTQyLjUwMiA0Mi41MDIgMCAwMDM2LjMxLTIwbDM0IDIwLjI4Yy0xNS4zMDcgMjMuOTU1LTQxLjkwMiAzOC40MzEtNzAuMzMgMzguMjhDMzYuNjMgMTYyLjM0IDAgMTI1LjY2IDAgODEuNTR6IiBmaWxsPSIjMDA1NkQyIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4="
            />
          </a>

          {/* Search Icon */}
          {isSearchVisible ? (
            <button
              className="btn btn-link search-cancel-btn"
              type="button"
              onClick={handleSearchToggle}
              aria-expanded={!isSearchVisible}
              aria-label="Close"
            >
              <CloseOutlined style={{ fontSize: "24px" }} />
            </button>
          ) : (
            <button
              className="btn btn-link"
              type="button"
              onClick={handleSearchToggle}
              aria-expanded={isSearchVisible}
              aria-label="Search"
            >
              <SearchOutlined style={{ fontSize: "24px" }} />
            </button>
          )}

          {/* Mobile menu (collapsed) */}
          <div
            className={`collapse navbar-collapse ${
              isNavbarCollapsed ? "" : "show"
            }`}
            id="navbarMobileMenu"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item togglebox">
                <a
                  className="nav-link"
                  href="#"
                  style={{ borderBottom: "1px solid rgba(0, 0, 0, .12)" }}
                >
                  Explore
                </a>
                <a className="nav-link" href="#">
                  For Businesses
                </a>
                <a className="nav-link" href="#">
                  For Governments
                </a>
                <a className="nav-link" href="#">
                  For Universities
                </a>
              </li>
            </ul>
          </div>

          {/* Search Input (collapsed) */}
          {isSearchVisible && (
            <div className="collapse show search-container" id="searchBar">
              <div className="search-input">
                <Input
                  placeholder="Search..."
                  suffix={<SearchOutlined />}
                  style={{
                    borderRadius: "25px",
                    paddingLeft: "40px",
                    height: "44px",
                    marginTop: "10px",
                    width: "100%",
                  }}
                  className="navbarInput"
                />
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
