// ===== DRIVER DATA =====
const drivers=[
  {name:"Syntec",tag:"CNC CONTROLLER",sub:"Spesialis retrofit & upgrade controller CNC Syntec untuk mesin milling, turning, dan routing.",logo:"images/drivers/logo-syntec.png",img:"images/drivers/syntec.jpg",feats:["Controller 6i/10M/21MA","Parameter backup","Programming support","Retrofit service","Ready stock"]},
  {name:"SZGH",tag:"CNC CONTROLLER",sub:"Controller CNC SZGH sebagai alternatif ekonomis untuk retrofit dan upgrade sistem lama dengan fitur lengkap.",logo:"",img:"images/drivers/szgh.jpg",feats:["4-axis controller","Lathe & milling","G-code compatible","Easy parameter","Retrofit ready","Ready stock"]},
  {name:"Mitsubishi Electric",tag:"SERVO DRIVER",sub:"Servo driver & motor Mitsubishi Electric untuk presisi tinggi di aplikasi CNC dan otomasi industri.",logo:"images/drivers/logo-mitsubishi.png",img:"images/drivers/mitsubishi.jpg",feats:["MR-J4/J5 Series","Servo motor","Encoder support","Parameter setting","Repair & replace"]},
  {name:"Yaskawa",tag:"SERVO DRIVER",sub:"Servo driver & amplifier Yaskawa Sigma series untuk performa dan keandalan tinggi di lini produksi.",logo:"images/drivers/logo-yaskawa.png",img:"images/drivers/yaskawa.jpg",feats:["Sigma-7 Series","Sigma-5 Series","Servo tuning","Auto-tuning","Parameter backup"]},
  {name:"Delta Electronics",tag:"INVERTER / VFD",sub:"Inverter & VFD Delta Electronics untuk kontrol kecepatan motor AC di mesin CNC dan sistem konveyor.",logo:"images/drivers/logo-delta.png",img:"images/drivers/delta.jpg",feats:["VFD-M/E/C Series","PLC integration","Parameter setting","Repair service","Ready stock"]},
  {name:"Panasonic",tag:"SERVO DRIVER",sub:"Servo driver & motor Panasonic MINAS series dengan teknisi berpengalaman siap instalasi dan perbaikan.",logo:"images/drivers/logo-panasonic.png",img:"images/drivers/panasonic.jpg",feats:["MINAS A6 Series","MINAS A5 Series","Servo tuning","Encoder alignment","Repair & replace"]},
  {name:"Maxsine",tag:"SERVO DRIVER",sub:"Servo driver Maxsine EP series untuk aplikasi CNC dan otomasi dengan performa stabil dan harga kompetitif.",logo:"",img:"images/drivers/maxsine.jpg",feats:["EP3 Series","EP5 Series","Auto-tuning","Parameter setting","Repair & replace","Ready stock"]}
];

function openDriverModal(i){
  const d=drivers[i];
  document.getElementById('dmodalImg').src=d.img;
  document.getElementById('dmodalTag').innerHTML=`<i class="ti ti-cpu" style="font-size:9px"></i> ${d.tag}`;
  document.getElementById('dmodalTitle').textContent=d.name;
  document.getElementById('dmodalSub').textContent=d.sub;
  document.getElementById('dmodalFeats').innerHTML=d.feats.map(f=>`<span class="dmodal-feat"><i class="ti ti-check" style="font-size:9px;margin-right:4px;color:var(--blue)"></i>${f}</span>`).join('');
  document.getElementById('dmodalBackdrop').classList.add('open');
}
function closeDModal(e){if(e.target===document.getElementById('dmodalBackdrop'))closeDModalNow()}
function closeDModalNow(){document.getElementById('dmodalBackdrop').classList.remove('open')}


const services=[
  {icon:"ti-refresh",title:"Retrofit CNC",short:"Upgrade ke Syntec terbaru",tag:"LAYANAN UNGGULAN",primary:true,img:"images/services/retrofit.jpg",desc:"Kami mengganti seluruh sistem elektrik, motor servo, dan controller mesin CNC lama Anda menggunakan brand Syntec terbaru. Hasilnya: akurasi tinggi, antarmuka modern, dan umur mesin yang jauh lebih panjang — dengan biaya jauh lebih hemat dibanding beli mesin baru.",feats:["Controller Syntec baru","Servo motor baru","Sistem elektrik diperbaharui","Kalibrasi & uji coba","Garansi pengerjaan","Training operator"]},
  {icon:"ti-building-factory-2",title:"Trading Mesin CNC",short:"Jual beli CNC baru & bekas",tag:"JUAL BELI",img:"images/services/trading.jpg",desc:"Kami menyediakan mesin CNC baru maupun bekas berkualitas dengan berbagai jenis: milling, turning, router, plasma cutting, dan lainnya. Semua unit telah melalui inspeksi teknis dan dilengkapi garansi.",feats:["CNC Milling","CNC Turning","CNC Router","Plasma Cutting","Unit baru & bekas","Inspeksi teknis"]},
  {icon:"ti-tool",title:"Perbaikan & Servis",short:"On-site & workshop",tag:"PERBAIKAN",img:"images/services/servis.jpg",desc:"Tim teknisi berpengalaman kami siap menangani kerusakan mesin CNC Anda, baik di lokasi pabrik (on-site) maupun di workshop kami. Kami menggunakan suku cadang original dan compatible berkualitas tinggi.",feats:["On-site service","Workshop repair","Spare part original","Diagnosa akurat","Respon cepat","Garansi servis"]},
  {icon:"ti-zoom-scan",title:"Troubleshooting",short:"Diagnosa cepat & tepat",tag:"TROUBLESHOOTING",img:"images/services/troubleshoot.jpg",desc:"Mesin error, alarm, atau tidak bergerak normal? Kami melakukan diagnosa mendalam pada sistem CNC, servo, PLC, dan komponen elektrik untuk menemukan akar masalah dan memberikan solusi yang tepat dan efisien.",feats:["Analisa error code","Diagnosa servo","Cek sistem PLC","Diagnosa elektrik","Laporan teknis","Solusi permanen"]},
  {icon:"ti-package",title:"Jual Sparepart",short:"Original & compatible",tag:"SPAREPART",img:"images/services/sparepart.jpg",desc:"Kami menyediakan sparepart CNC, servo driver, inverter, HMI, dan komponen otomasi industri dari brand Syntec, Mitsubishi, Yaskawa, Delta, dan Panasonic. Tersedia original maupun compatible berkualitas tinggi.",feats:["Syntec parts","Mitsubishi parts","Yaskawa parts","Delta parts","Panasonic parts","Ready stock"]},
  {icon:"ti-settings-2",title:"SPM",short:"Special Purpose Machine",tag:"SPECIAL PURPOSE MACHINE",img:"images/services/spm.jpg",desc:"Kami merancang dan membangun Special Purpose Machine (SPM) sesuai kebutuhan spesifik proses produksi Anda. Dari konsep, desain, fabrikasi, hingga instalasi dan commissioning dikerjakan oleh tim engineer berpengalaman.",feats:["Desain custom","Fabrikasi lokal","Sistem otomasi","Integrasi PLC","Commissioning","After-sales support"]},
  {icon:"ti-cpu",title:"HMI · Servo · Inverter",short:"Instalasi, setting & repair",tag:"OTOMASI",img:"images/services/hmi.jpg",desc:"Kami menangani instalasi, konfigurasi, pemrograman, dan perbaikan HMI, servo motor, servo driver, dan inverter dari berbagai brand industri. Didukung teknisi bersertifikat dengan pengalaman di berbagai sektor manufaktur.",feats:["HMI programming","Servo tuning","Inverter setting","Parameter backup","Repair & replace","Multi-brand"]},
  {icon:"ti-school",title:"Training CNC",short:"Pelatihan operator & teknisi",tag:"PELATIHAN",img:"images/services/training.jpg",desc:"Program training CNC komprehensif untuk operator dan teknisi, mencakup dasar-dasar CNC, pemrograman G-code, pengoperasian controller Syntec, troubleshooting, dan perawatan mesin. Tersedia in-house maupun on-site di pabrik Anda.",feats:["Dasar-dasar CNC","Pemrograman G-code","Operasi Syntec","Troubleshooting","Perawatan mesin","Sertifikat training"]},
  {icon:"ti-eye",title:"Vision Detector",short:"Sistem penglihatan mesin & inspeksi otomatis",tag:"MACHINE VISION",img:"images/services/vision.jpg",desc:"Solusi machine vision untuk inspeksi produk otomatis, deteksi cacat, barcode & QR reading, pengukuran dimensi, dan quality control berbasis kamera industri. Integrasi dengan sistem PLC dan conveyor produksi Anda.",feats:["Inspeksi otomatis","Deteksi cacat produk","Barcode & QR reading","Pengukuran dimensi","Integrasi PLC/conveyor","Kamera industri"]}
];

// Build service cards — 9 cards (3x3 grid) with hover image preview
const grid=document.getElementById('svcGrid');
const frameEl=document.getElementById('svcPhotoFrame');
const frameBg=document.getElementById('framePreviewBg');
const frameTitle=document.getElementById('framePreviewTitle');
const frameSub=document.getElementById('framePreviewSub');

services.forEach((s,i)=>{
  const c=document.createElement('div');
  c.className='svc-card'+(s.primary?' primary':'');
  c.innerHTML=`
    <div class="svc-icon-wrap"><i class="ti ${s.icon}"></i></div>
    <div class="svc-card-title">${s.title}</div>
    <div class="svc-card-desc">${s.short}</div>
    <div class="svc-card-hint"><i class="ti ti-zoom-in" style="font-size:9px"></i> Lihat detail</div>`;
  c.onclick=()=>openModal(i);
  c.addEventListener('mouseenter',()=>{
    frameBg.style.backgroundImage=`url('${s.img}')`;
    frameTitle.textContent=s.title;
    frameSub.textContent=s.short;
    frameEl.classList.add('has-preview');
  });
  c.addEventListener('mouseleave',()=>{
    frameEl.classList.remove('has-preview');
    setTimeout(()=>{if(!frameEl.classList.contains('has-preview'))frameBg.style.backgroundImage="url('images/services/retrofit.jpg')";},450);
  });
  grid.appendChild(c);
});

// ===== SLIDESHOW =====
const TOTAL=9;
const INTERVAL=5000;
let cur=0, progressTimer, startTime, running=true;

// Build dots
const dotsEl=document.getElementById('vsDots');
for(let i=0;i<TOTAL;i++){
  const d=document.createElement('div');
  d.className='vd'+(i===0?' active':'');
  d.onclick=(()=>{const n=i;return()=>goSlide(n,true)})();
  dotsEl.appendChild(d);
}

function goSlide(n,manual=false){
  document.getElementById('vs-'+cur).classList.remove('active');
  dotsEl.children[cur].classList.remove('active');
  cur=(n+TOTAL)%TOTAL;
  document.getElementById('vs-'+cur).classList.add('active');
  dotsEl.children[cur].classList.add('active');
  document.getElementById('vsCount').textContent=String(cur+1).padStart(2,'0')+' / '+String(TOTAL).padStart(2,'0');
  resetProgress();
}

function vsNext(){goSlide(cur+1,true)}
function vsPrev(){goSlide(cur-1,true)}

// Smooth progress bar
let pct=0;
function resetProgress(){
  pct=0;
  document.getElementById('vsProgress').style.width='0%';
  clearInterval(progressTimer);
  startTime=Date.now();
  progressTimer=setInterval(()=>{
    pct=Math.min(100,(Date.now()-startTime)/INTERVAL*100);
    document.getElementById('vsProgress').style.width=pct+'%';
    if(pct>=100){clearInterval(progressTimer);goSlide(cur+1);}
  },50);
}
resetProgress();

// ===== MODAL =====
function openModal(i){
  const s=services[i];
  document.getElementById('modalImg').innerHTML=`<img src="${s.img}" alt="${s.title}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0"/>`;
  document.getElementById('modalTag').innerHTML=`<i class="ti ${s.icon}" style="font-size:10px"></i> ${s.tag}`;
  document.getElementById('modalTitle').textContent=s.title;
  document.getElementById('modalDesc').textContent=s.desc;
  document.getElementById('modalFeats').innerHTML=s.feats.map(f=>`<span class="modal-feat"><i class="ti ti-check" style="font-size:10px;margin-right:4px;color:var(--blue)"></i>${f}</span>`).join('');
  document.getElementById('modalBackdrop').classList.add('open');
}
function closeModal(e){if(e.target===document.getElementById('modalBackdrop'))closeModalNow()}
function closeModalNow(){document.getElementById('modalBackdrop').classList.remove('open')}

// ===== CONTACT PHOTO SLIDESHOW =====
(function(){
  const labels=['4 Axis Cutting Trial','Accuracy Check','Control Repair','Control Retrofit','Machine Retrofit','Machine Calibration','New Project Wiring','Retrofit Rewiring','Retrofit 6TA-E','Set Zero'];
  const frame=document.getElementById('crSlideFrame');
  if(!frame)return;
  const imgs=frame.querySelectorAll('.cr-slide-img');
  const dotsEl=document.getElementById('crSlideDots');
  const labelEl=document.getElementById('crSlideLabel');
  let ci=0;
  // set all to opacity 0 except first
  imgs.forEach((img,i)=>{img.style.opacity=i===0?'1':'0';});
  imgs.forEach((_,i)=>{
    const d=document.createElement('div');
    d.style.cssText='width:'+(i===0?'20px':'14px')+';height:2px;border-radius:2px;background:'+(i===0?'var(--blue)':'rgba(255,255,255,0.25)')+';cursor:pointer;transition:background .3s,width .3s';
    d.onclick=(()=>{const n=i;return()=>crGo(n)})();
    dotsEl.appendChild(d);
  });
  function crGo(n){
    imgs[ci].style.opacity='0';
    dotsEl.children[ci].style.background='rgba(255,255,255,0.25)';
    dotsEl.children[ci].style.width='14px';
    ci=(n+imgs.length)%imgs.length;
    imgs[ci].style.opacity='1';
    dotsEl.children[ci].style.background='var(--blue)';
    dotsEl.children[ci].style.width='20px';
    if(labelEl)labelEl.textContent=labels[ci]||'';
  }
  setInterval(()=>crGo(ci+1),3200);
})();

// ===== COUNTING ANIMATION (ulang setiap kali terlihat) =====
(function(){
  let animFrames=[];

  function countUp(el, target, suffix, duration){
    let startTime=null;
    el.textContent='0'+suffix;
    function frame(ts){
      if(!startTime) startTime=ts;
      let progress=(ts-startTime)/duration;
      let val=Math.min(Math.round(progress*target),target);
      el.textContent=val+suffix;
      if(val<target) animFrames.push(requestAnimationFrame(frame));
    }
    animFrames.push(requestAnimationFrame(frame));
  }

  function stopAll(){
    animFrames.forEach(id=>cancelAnimationFrame(id));
    animFrames=[];
  }

  function startCounting(){
    stopAll();
    countUp(document.getElementById('statProyek'),500,'+',1800);
    countUp(document.getElementById('statTahun'),10,'+',1200);
    countUp(document.getElementById('statBrand'),7,'',900);
  }

  const statsBox=document.getElementById('statsBox');
  if(!statsBox) return;

  const obs=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        startCounting();
      } else {
        stopAll();
        document.getElementById('statProyek').textContent='0+';
        document.getElementById('statTahun').textContent='0+';
        document.getElementById('statBrand').textContent='0';
      }
    });
  },{threshold:0.4});
  obs.observe(statsBox);
})();
