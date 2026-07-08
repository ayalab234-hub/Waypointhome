
:root{
  --navy:#13294B;
  --copper:#B67A3A;
  --cream:#F8F6F2;
  --white:#ffffff;
  --text:#2C3440;
  --muted:#6B7280;
  --radius:16px;
  --shadow:0 12px 30px rgba(0,0,0,.08);
  --transition:.3s ease;
  --max:1200px;
}

*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  font-family:Inter,Arial,sans-serif;
  color:var(--text);
  background:var(--cream);
  line-height:1.6;
}
.container{
  width:min(92%,var(--max));
  margin:auto;
}
header{
  position:sticky;
  top:0;
  z-index:1000;
  background:rgba(255,255,255,.95);
  backdrop-filter:blur(12px);
  border-bottom:1px solid rgba(0,0,0,.05);
}
header .container{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:18px 0;
}
.logo{
  color:var(--navy);
  font-size:1.9rem;
  font-weight:700;
  text-decoration:none;
}
nav ul{
  display:flex;
  list-style:none;
  gap:2rem;
}
nav a{
  text-decoration:none;
  color:var(--navy);
  font-weight:600;
}
.button-primary,.button-secondary{
  display:inline-block;
  padding:15px 28px;
  border-radius:999px;
  text-decoration:none;
  font-weight:700;
  transition:var(--transition);
}
.button-primary{
  background:var(--navy);
  color:#fff;
}
.button-primary:hover{
  transform:translateY(-2px);
  box-shadow:var(--shadow);
}
.button-secondary{
  background:var(--copper);
  color:#fff;
}
.hero{
  min-height:90vh;
  display:grid;
  grid-template-columns:1.1fr .9fr;
}
.hero-content{
  display:flex;
  flex-direction:column;
  justify-content:center;
  padding:5rem 8%;
}
.hero h1{
  font-size:4rem;
  line-height:1.05;
  color:var(--navy);
}
.hero h1 span{color:var(--copper)}
.hero p{
  margin:2rem 0;
  font-size:1.2rem;
  max-width:600px;
}
.hero-buttons{
  display:flex;
  gap:1rem;
  flex-wrap:wrap;
}
.hero-image{
  background:linear-gradient(rgba(19,41,75,.2),rgba(19,41,75,.2)),
  url('images/hero.jpg') center/cover no-repeat;
}
section{
  padding:90px 0;
}
#services .container,
.benefits-grid,
.pricing-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
  gap:30px;
}
.feature,
.card,
.benefit{
  background:#fff;
  border-radius:var(--radius);
  padding:35px;
  box-shadow:var(--shadow);
  transition:var(--transition);
}
.feature:hover,
.card:hover,
.benefit:hover{
  transform:translateY(-8px);
}
h2{
  color:var(--navy);
  font-size:2.4rem;
  text-align:center;
  margin-bottom:3rem;
}
#included .container{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:60px;
  align-items:center;
}
#included ul{
  display:grid;
  gap:16px;
  list-style:none;
}
#included li{
  background:#fff;
  padding:14px 18px;
  border-left:4px solid var(--copper);
  border-radius:8px;
  box-shadow:0 4px 12px rgba(0,0,0,.05);
}
.pricing-grid .card{
  text-align:center;
}
.card h3{
  color:var(--navy);
  font-size:1.7rem;
}
.testimonials{
  background:var(--navy);
  color:#fff;
}
.testimonials h2{color:#fff}
#faq details{
  background:#fff;
  margin:1rem auto;
  border-radius:12px;
  padding:20px;
  max-width:900px;
  box-shadow:var(--shadow);
}
#schedule{
  background:linear-gradient(135deg,var(--navy),#24446f);
  color:#fff;
  text-align:center;
}
#schedule h2{color:#fff}
footer{
  background:#0f1f37;
  color:#d8d8d8;
  padding:50px 0;
}
footer a{
  color:#fff;
  text-decoration:none;
}
@media(max-width:900px){
  nav{display:none;}
  .hero{
    grid-template-columns:1fr;
  }
  .hero-image{
    min-height:350px;
    order:-1;
  }
  .hero h1{
    font-size:2.8rem;
  }
  #included .container{
    grid-template-columns:1fr;
  }
}
