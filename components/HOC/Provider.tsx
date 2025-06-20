import React from "react"; // استيراد مكتبة React
import { ThemeProvider } from "next-themes"; // استيراد ThemeProvider من مكتبة next-themes

// تعريف مكون Provider الذي يستقبل children كخاصية
const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    // استخدام ThemeProvider لتوفير الثيمات (الألوان) للتطبيق
    <ThemeProvider attribute={"class"} enableSystem defaultTheme="system">
      {children} {/* عرض العناصر الفرعية (children) داخل ThemeProvider */}
    </ThemeProvider>
  );
};

// تصدير مكون Provider ليتم استخدامه في أماكن أخرى
export default Provider;
