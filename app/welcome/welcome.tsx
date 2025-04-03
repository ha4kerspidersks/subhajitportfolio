import logoDark from "../assets/images/Ha4ker_Spider.jpg";
import logoLight from "../assets/images/Ha4ker_Spider.jpg";

const Welcome = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="text-center">
        <img
          src={logoLight}
          alt="Ha4ker Spider Logo"
          className="w-32 h-32 mx-auto mb-8 dark:hidden"
        />
        <img
          src={logoDark}
          alt="Ha4ker Spider Logo"
          className="w-32 h-32 mx-auto mb-8 hidden dark:block"
        />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Welcome;
