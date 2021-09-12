import "./Footer.css";
import { FacebookFilled, InstagramFilled, MailFilled, WhatsAppOutlined,CopyrightOutlined } from '@ant-design/icons';

export default function Footer() {
    const IconStyle={ fontSize: '26px', marginLeft:"30px",marginRight:"30px" };
  return (
    <div className="FooterContainer">
      <div className="FooterMain">
        <div className="FooterList">
          <span className="FooterTitle">About</span>
          <span className="FooterLinks">
            <a href="/">Services</a>
            <a href="/">Customers</a>
            <a href="/">Pricing</a>
            <a href="/">Brands We Have</a>
          </span>
        </div>

        <div className="FooterList">
          <span className="FooterTitle">Contact</span>
          <span className="FooterLinks">
            <a href="/">Mobile : 90909090676</a>
            <a href="/">Whatsapp : 7028262866</a>
            <a href="/">Email : aspdaj@lanlaf.in</a>
            <a href="/">Instagram : @aspdaj</a>
          </span>
        </div>

        <div className="FooterList">
          <span className="FooterTitle">Shop</span>
          <span className="FooterLinks">
            <a href="/">PrpSons Shop Keharwin</a>
            <a href="/">
              Address : Pandher, Distt & Tehsil Hamirpur (HP) pin 177501
            </a>
            <a href="/">Location: Near this chop keharwin</a>
            <a href="/">Owner Name: Partap Chand</a>
          </span>
        </div>
      </div>
      <div className="FooterSocial">
        <FacebookFilled style={{...IconStyle,color: '#08c'}} />
        <InstagramFilled style={{...IconStyle,color: '#E1306C'}} />
        <MailFilled style={{...IconStyle,color: '#08c'}} />
        <WhatsAppOutlined style={{...IconStyle,color: 'green'}}/>
      </div>
      <div className="FooterFooter">
          <div className="FooterLeftLink">
            <a href="">Terms & Conditions</a>
            <a href="" style={{marginLeft:"20px"}}>Privacy Policy</a>
          </div>
          <div className="FooterRightLink">
            <a href=""><CopyrightOutlined style={{fontSize: '20px',color: 'white',marginRight:"5px",position:"relative",top:"2px"}}/></a>
            <a href="">2021 PrpSons.com</a>

          </div>
      </div>
    </div>
  );
}
