// import React from 'react'

// const navbar = () => {
//   return (
//     <div className="navbar bg-base-100 shadow-sm">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//             <li><a>Homepage</a></li>
//             <li><a>Cost Calculator</a></li>
//             <li><a>About</a></li>
//           </ul>
//         </div>
//       </div>
//       <div className="navbar-center">
//         <a className="btn btn-ghost text-xl rounded-box">PackAndGO</a>
//       </div>
//       <div className="navbar-end">
//         <button className="btn btn-ghost btn-circle">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
//         </button>
//         <button className="btn btn-ghost btn-circle">
//           <div className="indicator">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
//             <span className="badge badge-xs badge-primary indicator-item">
              
//             </span>
//           </div>
//         </button>
//       </div>
//     </div>
//   )
// }

// export default navbar


import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar fixed top-0 left-0 right-0 backdrop-blur-md bg-indigo-900/70 text-white shadow-lg z-50">
      {/* Left Side */}
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle text-white hover:bg-indigo-700/50 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-indigo-800/80 backdrop-blur-md rounded-xl z-[1] mt-3 w-52 p-2 shadow text-white"
          >
            <li><a className="hover:text-pink-400">Homepage</a></li>
            <li><a className="hover:text-pink-400">Cost Calculator</a></li>
            <li><a className="hover:text-pink-400">About</a></li>
          </ul>
        </div>
      </div>

      {/* Center Branding */}
      <div className="navbar-center">
        <a className="text-3xl font-extrabold tracking-wide text-pink-400 drop-shadow-lg flex items-center gap-2 hover:scale-105 transition-transform duration-300">
          🌲 <span className="animate-pulse">PackAndGO</span> 🌲
        </a>
      </div>

      {/* Right Side */}
      <div className="navbar-end flex gap-2">
        <button className="btn btn-ghost btn-circle hover:bg-indigo-700/50 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button className="btn btn-ghost btn-circle hover:bg-indigo-700/50 transition">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="badge badge-xs bg-pink-400 border-none indicator-item animate-bounce"></span>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Navbar
