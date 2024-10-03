declare module 'bidi-js' {
  interface Bidi {
    reorder: (text: string) => string; // تعريف دالة reorder
    // يمكنك إضافة أي دوال أو خصائص أخرى هنا حسب الحاجة
  }

  const bidi: Bidi; // تأكد من استخدام Bidi بدلاً من any
  export default bidi;
}
