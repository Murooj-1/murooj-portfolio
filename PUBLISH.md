# النشر المجاني باستخدام Cloudflare Pages

الموقع جاهز دون تثبيت مكتبات أو خطوة بناء.

1. افتحي حسابًا في https://dash.cloudflare.com/.
2. انتقلي إلى Workers & Pages ثم Create application، واختاري Pages وخيار Drag and drop / رفع الملفات.
3. ارفعي ملف E:\Portfolio\murooj-portfolio-ready.zip أو مجلد dist.
4. سمّي المشروع ثم اختاري Deploy site. يظهر لك رابط عام على نطاق pages.dev.

الملف المضغوط يحتوي على محتويات dist فقط، ويجب أن يكون index.html في جذر الملفات المرفوعة. لإجراء تحديث، أعيدي رفع نسخة أحدث عبر Create a new deployment.

مرجع الخطوات: https://developers.cloudflare.com/pages/get-started/direct-upload/

بديل: GitHub Pages متاح مجانًا للمستودعات العامة. ارفعي محتويات dist إلى جذر مستودع عام، ثم Settings → Pages → Deploy from a branch → main → / (root) → Save.

المعاينة الحالية على Sites خاصة بحسابك. النشر على Cloudflare حساب مستقل وخطوة منفصلة.
