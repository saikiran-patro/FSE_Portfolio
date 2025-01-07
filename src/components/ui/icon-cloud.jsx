import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";

// Cloud configuration
export const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

// Custom render function for icons
export const renderCustomIcon = (icon, theme) => {
  const bgHex = theme === "light" ? "#FF9D23" : "#CBA35C"; // Background color
  const fallbackHex = theme === "light" ? "#FF9D23" : "#CBA35C"; // Fallback color
  const minContrastRatio = 1; // Relaxed contrast ratio for better rendering

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 60, // Icon size
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(), // Prevent click navigation
    },
  });
};

export default function IconCloud({ iconSlugs }) {
  const [data, setData] = useState(null);
  const { theme } = useTheme(); // Access current theme

  // Fetch icons when component mounts or iconSlugs change
  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  // Render icons based on the fetched data and current theme
  const renderedIcons = useMemo(() => {
    if (!data) return null;
    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "light")
    );
  }, [data, theme]);

  return (
    // @ts-ignore
    <Cloud {...cloudProps}>
      <>{renderedIcons}</>
    </Cloud>
  );
}
