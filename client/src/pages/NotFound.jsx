import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Sanuji Weerasinghe</title>
      </Helmet>
      <section className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
        <span className="text-gradient text-7xl font-bold">404</span>
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Page not found</h1>
        <p className="max-w-md text-slate-500 dark:text-slate-400">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-primary mt-2">
          <FiArrowLeft /> Back to Home
        </Link>
      </section>
    </>
  );
}
