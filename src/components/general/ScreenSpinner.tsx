import Spinner from "./Spinner";

type ScreenSpinnerProps = {
  spinnerClassName?: string;
};

const ScreenSpinner = ({ spinnerClassName = "" }: ScreenSpinnerProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50">
      <Spinner className={spinnerClassName} />
    </div>
  );
};

export default ScreenSpinner;
