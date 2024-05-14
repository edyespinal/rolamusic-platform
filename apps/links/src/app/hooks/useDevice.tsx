import React from "react";

type Device = "mobile" | "tablet" | "desktop";

const useDevice = () => {
  const [device, setDevice] = React.useState<Device>("desktop");

  React.useEffect(() => {
    const handleDeviceDetection = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile = /iphone|ipad|ipod|android/g.test(userAgent);
      const isTablet = /ipad|(android(?!.*mobile))/g.test(userAgent);

      if (isMobile) {
        setDevice("mobile");
      } else if (isTablet) {
        setDevice("tablet");
      } else {
        setDevice("desktop");
      }
    };

    handleDeviceDetection();
    window.addEventListener("resize", handleDeviceDetection);

    return () => {
      window.removeEventListener("resize", handleDeviceDetection);
    };
  }, []);

  return device;
};

export { useDevice };
