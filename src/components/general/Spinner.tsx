import { loadingGif } from "@/assets";
import Image from "next/image";

type SpinnerProps = {
  className: string;
};

// must provide width and height in className like: w-8 h-8
const Spinner = ({ className = "" }: SpinnerProps) => {
  return (
    <>
      <Image
        src={loadingGif}
        alt="loading"
        width={120}
        height={120}
        className={`${className}`}
        unoptimized={true}
      />
    </>
  );
};

export default Spinner;
