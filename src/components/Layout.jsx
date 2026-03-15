import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">

      {/* Sidebar */}
      <div className="w-full md:w-64">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Navbar />

        <div className="p-4 md:p-6 bg-slate-100 min-h-screen overflow-x-auto">
          {children}
        </div>
      </div>

    </div>
  );
}

export default Layout;

        <div className="p-6 bg-slate-100 min-h-screen">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
