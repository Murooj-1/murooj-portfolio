const root=document.documentElement;
const menuButton=document.querySelector('#menu'),nav=document.querySelector('#navigation');
function closeMenu(){nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','فتح القائمة')}
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'إغلاق القائمة':'فتح القائمة')});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){closeMenu();menuButton.focus()}});
if('IntersectionObserver' in window){const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');/* Keep revealed content available when revisiting sections. */}}),{threshold:.08});root.classList.add('js-motion');document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));const sectionObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){nav.querySelectorAll('a').forEach(a=>{const active=a.hash==='#'+entry.target.id;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')})}}),{rootMargin:'-15% 0px -55% 0px'});document.querySelectorAll('main>section[id]').forEach(s=>sectionObserver.observe(s))}
const filters=document.querySelectorAll('[data-filter]');filters.forEach(button=>button.addEventListener('click',()=>{filters.forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button))});document.querySelectorAll('.project').forEach(project=>{project.hidden=button.dataset.filter!=='all'&&project.dataset.category!==button.dataset.filter});const count=[...document.querySelectorAll('.project')].filter(p=>!p.hidden).length;document.querySelector('.filter-status').textContent='عرض '+count+' من 7 مشاريع'}));
const projects=[
{title:'كنف — Kanaf',category:'ذكاء اصطناعي · تحليل محتوى متعدد الوسائط',description:'نظام مدعوم بالذكاء الاصطناعي لتحليل محتوى الأطفال متعدد الوسائط، ورصد الرموز والكلام غير المناسب، وإعداد تقارير باللغة العربية تساعد الوالدين على فهم المحتوى.',points:['تحليل المحتوى متعدد الوسائط.','الكشف عن الرموز والكلام غير المناسب للأطفال.','تقديم تقارير عربية واضحة للوالدين.']},
{title:'تثمين — Tathmeen',category:'تطوير ويب · تسعير الخدمات التقنية',description:'نظام لحساب أسعار الخدمات التقنية المقدمة لجهة معينة، مع لوحة تحكم لإدارة التسعير باستخدام HTML وJavaScript وPHP.',points:['حساب أسعار الخدمات التقنية المقدمة لجهة معينة.','لوحة تحكم لإدارة التسعير.']},
{title:'Joyful Paws',category:'منصة ويب · رعاية الحيوانات الأليفة',description:'منصة تدعم رعاية الحيوانات الأليفة وتجمع خدمات العناية والمستلزمات والتبنّي في تجربة واحدة.',points:['خدمات رعاية الحيوانات الأليفة.','مستلزمات الحيوانات الأليفة.','خدمات التبنّي.']},
{title:'بنيان — Bunyan',category:'تطوير ألعاب · JavaFX',description:'لعبة طُوّرت باستخدام JavaFX بهدف تعزيز سرعة الاستجابة والتركيز.',points:['توظيف JavaFX في تطوير الألعاب.','التركيز على سرعة الاستجابة والانتباه.']},
{title:'Plant Care',category:'موقع تعليمي · التوعية بالنباتات',description:'موقع تعليمي يركّز على نشر الوعي بالنباتات والعناية بها.',points:['تقديم محتوى تعليمي عن النباتات.','تعزيز الوعي بالعناية بالنباتات.']},
{title:'كيمو التائه — The Lost Kemo',category:'رسوم متحركة · C++',description:'فيلم رسوم متحركة موجه للأطفال طُوّر باستخدام C++، ويجمع بين البرمجة والسرد البصري.',points:['استخدام C++ لإنتاج رسوم متحركة.','تقديم حكاية بصرية للأطفال.']}
];
projects.push({title:'خضراء اليمامة',category:'ذكاء اصطناعي · Roboflow · رؤية حاسوبية',description:'بدل انتظار البلاغات اليدوية، تعتمد المنصة على صور المسح الجوي للكشف المبكر عن احتياجات الحدائق والمساحات العامة. يصنّف نموذج الرؤية الحاسوبية العناصر إلى خمس فئات: النفايات، والتشوهات البصرية، والمسطحات الخضراء، والمرافق العامة، والإنارة والكهرباء. تُحدّد أولوية البلاغ تلقائيًا من عدد العناصر المكتشفة، وتُستخرج الإحداثيات ووقت التصوير من بيانات EXIF دون إدخال يدوي. تجمع المنصة لوحة مؤشرات، وخريطة تفاعلية لمكة، وسجل بلاغات قابلًا للتصدير، وعرضًا للصور يوضّح إطارات الاكتشاف ودرجات الثقة. أُنجز المشروع ضمن هاكاثون سنا لمكة الذكية وحقق المركز الخامس. تمثّلت مساهمتي في تدريب نموذج الذكاء الاصطناعي واكتشاف العناصر في الصور باستخدام Roboflow.',points:["مسح جوي بالدرونز وتحليل الصور لرصد خمس فئات من احتياجات الصيانة والتشوهات.","احتساب أولوية البلاغ آليًا بناءً على عدد الاكتشافات في الصورة.","استخراج الموقع والوقت من بيانات EXIF وتوثيق البلاغ دون إدخال يدوي.","واجهات عربية تشمل لوحة مؤشرات وخريطة مكة وسجل بلاغات قابلًا للتصدير.","عرض نتائج النموذج بإطارات الاكتشاف ودرجات الثقة.","المركز الخامس في هاكاثون سنا لمكة الذكية.","دوري: تدريب نموذج الذكاء الاصطناعي واكتشاف العناصر باستخدام Roboflow."]});
const projectMetadata=[{"year":2025,"tech":["HTML","CSS","Bootstrap","JavaScript","PHP","Python","Flask","Firebase","YOLOv8","Whisper","BERT","Roboflow 3.0","PySlowFast","SVM","ConvLSTM"],"demos":["https://drive.google.com/file/d/1PxIGS5wRH4y6Ro0_5ZXRx4uuDnEifMyu/view"]},{"year":2024,"tech":["HTML","JavaScript","PHP","Dashboard"],"demos":["https://drive.google.com/file/d/1fWxeOTsVLEurRklqB54E4jtB-4B207VK/view","https://drive.google.com/file/d/15xTZgCIeUsCzCegcgOXxwMn_TEdRXxCk/view"]},{"year":2024,"tech":["Bootstrap 5","HTML","JavaScript","PHP"],"demos":["https://drive.google.com/file/d/1ml4CJObfCNzpm58Gv5zB6P9Q-3gahj-i/view"]},{"year":2024,"tech":["JavaFX"],"demos":["https://drive.google.com/file/d/1LP7lwVQe1ONk2qtrvVwjpSD4lVf9ARNB/view"]},{"year":2024,"tech":["HTML","CSS"],"demos":["https://drive.google.com/file/d/1LJvd2xkRGHnAEHiYAZ58-ePpyaUXxicd/view"]},{"year":2023,"tech":["C++"],"demos":["https://drive.google.com/file/d/1gxwxZRy5mdtC8huKmhNC3iGdpr4NXs2y/view"]},{"year":2025,"tech":["Roboflow","JavaScript","Firebase","Leaflet"],"demos":[]}];
projects.forEach((project,i)=>Object.assign(project,projectMetadata[i]||{}));
window.arabicProjects=projects;
const dialog=document.querySelector('#project-dialog');let trigger;
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{const p=(window.siteLanguage==='en'?window.englishProjects:projects)[Number(button.dataset.project)];trigger=button;document.querySelector('#dialog-title').textContent=p.title;document.querySelector('#dialog-category').textContent=p.category;document.querySelector('#dialog-description').textContent=p.description;const list=document.createElement('ul');p.points.forEach(point=>{const item=document.createElement('li');item.textContent=point;list.append(item)});document.querySelector('#dialog-points').replaceChildren(list);renderProjectResources(Number(button.dataset.project));dialog.showModal()}));
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target!==dialog)return;const rect=dialog.getBoundingClientRect();if(e.clientX<rect.left||e.clientX>rect.right||e.clientY<rect.top||e.clientY>rect.bottom)dialog.close()});dialog.addEventListener('close',()=>trigger?.focus());
let scheduled=false;function updateProgress(){const max=document.documentElement.scrollHeight-innerHeight;document.querySelector('.reading-progress').style.width=(max>0?Math.min(100,scrollY/max*100):0)+'%';scheduled=false}addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(updateProgress)}},{passive:true});addEventListener('resize',updateProgress);updateProgress();document.querySelector('#year').textContent=new Date().getFullYear();

// Accessible mobile navigation and predictable modal scrolling.
const backToTop=document.querySelector('.back-to-top');
addEventListener('scroll',()=>{backToTop.hidden=scrollY<700},{passive:true});
backToTop.addEventListener('click',()=>{scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});document.querySelector('.brand').focus({preventScroll:true})});
document.addEventListener('click',e=>{if(nav.classList.contains('open')&&!nav.contains(e.target)&&!menuButton.contains(e.target))closeMenu()});
document.addEventListener('keydown',e=>{if(!nav.classList.contains('open'))return;if(e.key==='Escape'){closeMenu();menuButton.focus()}if(e.key==='Tab'&&matchMedia('(max-width:760px)').matches){const focusable=[...nav.querySelectorAll('a'),menuButton];const first=focusable[0],last=focusable[focusable.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}});
const navMedia=matchMedia('(min-width:761px)');navMedia.addEventListener('change',e=>{if(e.matches)closeMenu()});
document.querySelectorAll('[data-project]').forEach(b=>b.addEventListener('click',()=>{document.body.classList.add('dialog-open')}));dialog.addEventListener('close',()=>document.body.classList.remove('dialog-open'));

// Keep the expanded mobile menu within the viewport without scrolling the page behind it.
const mobileNavigation=matchMedia('(max-width: 760px)');
function syncMobileNavigation(){document.body.classList.toggle('mobile-nav-open',mobileNavigation.matches&&nav.classList.contains('open'))}
new MutationObserver(syncMobileNavigation).observe(nav,{attributes:true,attributeFilter:['class']});
mobileNavigation.addEventListener('change',syncMobileNavigation);syncMobileNavigation();

// Project resources are shared by both languages; Khadraa has no new metadata.
function renderProjectResources(index){
 const data=projectMetadata[index],en=window.siteLanguage==='en';
 let container=document.querySelector('#dialog-resources');
 if(!container){container=document.createElement('div');container.id='dialog-resources';document.querySelector('#dialog-points').after(container)}
 container.replaceChildren();if(!data)return;
 const year=document.createElement('p');year.className='project-year';year.textContent=(en?'Year: ':'سنة التنفيذ: ')+data.year;
 const heading=document.createElement('h4');heading.textContent=en?'Technologies':'التقنيات المستخدمة';
 const tech=document.createElement('ul');tech.className='project-technologies';
 data.tech.forEach(value=>{const item=document.createElement('li');item.textContent=value;item.lang='en';item.dir='ltr';tech.append(item)});
 container.append(year,heading,tech);if(index===6)renderKhadraaGallery(container);
}

// Stop embedded playback and release the frame when the project closes.
dialog.addEventListener('close',()=>{if(!dialog.open)document.querySelector('.demo-player')?.remove()});

// Replace the original card surface with the selected demo without changing its dimensions.
function resetInlineDemo(article){
 article.querySelector('.card-demo-player')?.remove();article.querySelector('.project-art').classList.remove('is-playing');
 article.querySelectorAll('[data-demo-project]').forEach(b=>b.setAttribute('aria-pressed','false'));article.querySelector('.restore-project').hidden=true;
}
document.querySelectorAll('[data-demo-project]').forEach(button=>button.addEventListener('click',()=>{
 const article=button.closest('.project'),card=article.querySelector('.project-art'),index=Number(button.dataset.demoProject),demo=Number(button.dataset.demoIndex);
 document.querySelectorAll('.project').forEach(other=>{if(other!==article&&other.querySelector('.card-demo-player'))resetInlineDemo(other)});
 resetInlineDemo(article);const frame=document.createElement('iframe');frame.className='card-demo-player';frame.src=projectMetadata[index].demos[demo].replace(/\/view.*$/,'/preview');
 frame.title=(window.siteLanguage==='en'?'Project demo: ':'ديمو المشروع: ')+(window.siteLanguage==='en'?window.englishProjects[index].title:projects[index].title)+' '+(demo+1);
 frame.allow='autoplay; fullscreen; encrypted-media';frame.allowFullscreen=true;frame.referrerPolicy='strict-origin-when-cross-origin';
 card.append(frame);card.classList.add('is-playing');button.setAttribute('aria-pressed','true');article.querySelector('.restore-project').hidden=false;
}));
document.querySelectorAll('.restore-project').forEach(button=>button.addEventListener('click',()=>{const article=button.closest('.project');resetInlineDemo(article);article.querySelector('[data-demo-project]').focus()}));
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.project[hidden]').forEach(article=>{if(article.querySelector('.card-demo-player'))resetInlineDemo(article)})}));

const khadraaScreenshots=[{"src":"assets/khadraa-gallery/khadraa-dash.webp","ar":"لوحة المؤشرات وتصنيف البلاغات وخريطة مكة","en":"Dashboard, report categories, and Makkah map"},{"src":"assets/khadraa-gallery/khadraa.webp","ar":"الصفحة الرئيسية لمنصة خضراء اليمامة","en":"Khadraa Al-Yamamah home page"},{"src":"assets/khadraa-gallery/khadraa-detect.webp","ar":"اكتشاف العناصر في الصور مع درجات الثقة","en":"Image detections with confidence scores"},{"src":"assets/khadraa-gallery/khadraa-reports.webp","ar":"سجل البلاغات حسب الأولوية والجهة المسؤولة","en":"Reports by priority and responsible organization"},{"src":"assets/khadraa-gallery/khadraa-map.webp","ar":"مواقع البلاغات على الخريطة","en":"Report locations on the map"}];
function renderKhadraaGallery(container){
 const en=window.siteLanguage==='en',gallery=document.createElement('section');gallery.className='khadraa-gallery';
 const heading=document.createElement('h3');heading.textContent=en?'Project screenshots':'صور المشروع';
 const figure=document.createElement('figure'),preview=document.createElement('button');preview.type='button';preview.className='gallery-preview';preview.setAttribute('aria-pressed','false');preview.setAttribute('aria-label',en?'Enlarge screenshot':'تكبير الصورة');
 const image=document.createElement('img');image.decoding='async';preview.append(image);
 preview.addEventListener('click',()=>{const zoomed=gallery.classList.toggle('is-zoomed');preview.setAttribute('aria-pressed',String(zoomed));preview.setAttribute('aria-label',en?(zoomed?'Reduce screenshot':'Enlarge screenshot'):(zoomed?'تصغير الصورة':'تكبير الصورة'))});
 const caption=document.createElement('figcaption');figure.append(preview,caption);
 const thumbnails=document.createElement('div');thumbnails.className='gallery-thumbnails';thumbnails.setAttribute('role','group');thumbnails.setAttribute('aria-label',en?'Choose screenshot':'اختيار صورة المشروع');
 function select(index){const item=khadraaScreenshots[index];image.src=item.src;image.alt=en?item.en:item.ar;caption.textContent=image.alt;thumbnails.querySelectorAll('button').forEach((button,i)=>button.setAttribute('aria-pressed',String(index===i)))}
 khadraaScreenshots.forEach((item,i)=>{const button=document.createElement('button');button.type='button';button.setAttribute('aria-label',en?item.en:item.ar);const thumbnail=document.createElement('img');thumbnail.src=item.src;thumbnail.alt='';thumbnail.loading='lazy';button.append(thumbnail);button.addEventListener('click',()=>select(i));thumbnails.append(button)});
 gallery.append(heading,figure,thumbnails);container.append(gallery);select(0);
}
