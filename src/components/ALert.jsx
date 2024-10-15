import PropTypes from "prop-types";

const Alert = ({ type, text }) => {
  return (
    <div className="fixed bottom-5 right-5 flex justify-center items-center z-50">
      <div
        className={`p-2 ${
          type === "danger" ? "bg-red-950" : "bg-blue-950"
        } items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex rounded-md p-5`}
        role="alert"
      >
        <p
          className={`flex rounded-full ${
            type === "danger" ? "bg-red-900" : "bg-blue-900"
          } uppercase px-2 py-1 text-xs font-semibold mr-3`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </p>
        <p className="mr-2 text-left">{text}</p>
      </div>
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Alert;
