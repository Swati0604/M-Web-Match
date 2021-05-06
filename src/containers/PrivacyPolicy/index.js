import React from 'react';
import { Link } from 'react-router-dom';
import { withGoogleSheets } from 'react-db-google-sheets';

//Custom Component
import Header from '../../components/Header';
import LocationCard from '../../components/LocationCard';
import Title from '../../components/Title';

//Styles
import './styles.scss';
import SubTitle from '../../components/SubTitle';
import ResourcesCard from '../../components/ResourcesCard';
import HomeAllJobs from '../../components/HomeAllJobs';
import HomeGuideSec from '../../components/HomeGuideSec';
import Footer from '../../components/Footer';
import BottomNavBar from '../../components/BottomNavBar';
import BannerCarousel from '../../components/BannerCarousel';

function PrivacyPolicy() {
  return (
    <div className='privacy-policy-style'>
      {/* navigation bar */}
      <Header />

      <div className='privacy-policy-container'>
        <h4 className='heading'>Privacy Policy</h4>
        <p className='sub-title'>Last updated on Monday, 16 September</p>

        <div className='policy-section'>
          <h5 className='title'>1. Introduction</h5>
          <p className='sub-title'>
            These Privacy Policy (“Privacy Policy”) apply to the use of the
            website and products provided by (hereinafter also referred as “we”
            or “us”). Our registered office is at Gurgaon, Haryana, registered
            no.: 8607901606.
          </p>
          <p className='sub-title'>
            This Privacy Policy applies and has effect in respect of all
            services and other products, software, made available by us, as well
            as any other online features relating to the website and its content
            (the “Service(s)”).
          </p>
          <p className='sub-title'>
            If you have any questions or comments about this Privacy Policy,
            please contact us at rohanmishra.design@gmail.com.{' '}
          </p>
          <p className='sub-title'>
            We are committed to protecting and respecting your privacy. The
            Privacy Policy explains the basis on which personal information we
            collect from you will be processed by us or on our behalf. Where we
            decide the purpose or means for which personal data you supply
            through these Services is processed, we are the “controller”. Where
            you decide the purpose or means for which personal data you supply
            through these Services is processed, you are the “controller”. We
            will comply with proper and applicable data protection laws,
            including the General Data Protection Regulation 2016/679.
          </p>
          <p className='sub-title'>
            We encourage you to read this Privacy Policy carefully as it
            contains important information about the following:
          </p>
          <p className='sub-title'>
            1. What information we may collect about you;
          </p>
          <p className='sub-title'>
            2. How we will use the information we collect about you;
          </p>
          <p className='sub-title'>
            3. Whether we will disclose your details to anyone else; and{' '}
          </p>
          <p className='sub-title'>
            4. Your choices and rights regarding the personal information you
            have provided to us.
          </p>
          <p className='sub-title'>
            The Services may contain links to services owned and operated by
            third parties. We may also use some third-parties software or
            products to provide you with the Service properly. If we do so and
            provide third -parties of any personal data you can be sure the
            transfer is legal and secured. These third-party services may have
            their own privacy policies and we recommend that you review them.
            They will govern the use of personal information that you submit or
            which is collected by cookies and other tracking technologies whilst
            using these services. We do not accept any responsibility or
            liability for the privacy practices of such third party services and
            your use of these is at your own risk.
          </p>
          <p className='sub-title'>
            We may make changes to this Privacy Policy in the future. You should
            check this page from time to time to ensure you are aware of any
            changes. Where appropriate we may notify you of such changes.
          </p>
        </div>
        <div className='policy-section'>
          <h5 className='title'>2. Information we may collect about you</h5>
          <p className='sub-title'>
            We collect and process the following information which may include
            your personal data.
          </p>
          <p className='sub-title'>
            Your name, last name, email address, phone number, contact data,
            device’s ID, your user preferences as well as all the data
            (including personal data) you supply to us and information provided
            by you when using the Service or website.
          </p>
        </div>
        <div className='policy-section'>
          <h5 className='title'>
            3. Collecting, processing and using personal data
          </h5>
          <p className='sub-title'>
            We only store and process your personal data when you have
            voluntarily supplied us with it such as by filling in a contact form
            or signing up to the Service. Your personal data will only be
            disclosed or otherwise transmitted if this is necessary to implement
            the contract, render our Services or you have given your prior
            consent.
          </p>
        </div>
        <div className='policy-section'>
          <h5 className='title'>
            4. Why we collect information about you - purpose of processing
          </h5>
          <p className='sub-title'>
            We will use information about you for delivering our Services to you
            under the terms of use agreed between us. The processing of
            information in this way is necessary for us to provide you the
            Service properly and to ensure the features function properly so
            that you have the best Service possible.
          </p>
        </div>
        <div className='policy-section'>
          <h5 className='title'>5. Cookies and Web Beacons</h5>
          <p className='sub-title'>
            We use cookies to make the use of our website easier for you. These
            cookies are used to store information including visitors’
            preferences, and the pages on the website that the visitor accessed
            or visited. The information is used to optimize the users’
            experience by customizing our web page content based on visitors’
            browser type and/or other information.Cookies may be opt-out by you
            and in case you do not accept cookies, this may lead to a limitation
            of functionality.
          </p>
        </div>
        <div className='policy-section'>
          <h5 className='title'>8. Data sharing</h5>
          <p className='sub-title'>
            We will share your information (including personal data) with third
            parties only in the ways that are described in this Privacy Policy.
          </p>
          <p className='sub-title'>
            Personnel, suppliers or subcontractors: We keep your information
            confidential, but may disclose it to our personnel, suppliers or
            subcontractors insofar as it is reasonably necessary for the
            purposes set out in this Privacy Policy. However, this is on the
            basis that they do not make independent use of the information, and
            have agreed to safeguard it.
          </p>
          <p className='sub-title'>
            Required by law: In addition, we may disclose your information to
            the extent that we are required to do so by law (which may include
            to government bodies and law enforcement agencies); in connection
            with any legal proceedings or prospective legal proceedings; and in
            order to establish, exercise or defend our legal rights.
          </p>
        </div>
        <div className='policy-section'>
          <h5 className='title'>9. Data transmission</h5>
          <p className='sub-title'>
            Your data is transmitted safely by using encryption. We secure our
            website and other systems with technical and organizational measures
            against the loss, destruction, access, change or dissemination of
            your data by unauthorized persons.
          </p>
        </div>

        <div className='policy-section'>
          <h5 className='title'>10. Your rights</h5>
          <p className='sub-title'>
            You have the following rights over the way your personal data are
            processed. To make a request, please let us know by sending an email
            to rohanmishra.design@gmail.com.
          </p>
          <p className='sub-title'>
            a) You have the right to request a copy of the personal information
            we process about you and to have any inaccuracies corrected.
          </p>
          <p className='sub-title'>
            b) You can ask for supplying, correcting or deleting personal
            information held about you.
          </p>
          <p className='sub-title'>
            c) You can ask us to restrict, stop processing, or to delete your
            personal data.
          </p>
          <p className='sub-title'>
            d) You can withdraw your consent for data processing
          </p>
          <p className='sub-title'>
            e) Obtain a copy of your personal data, which you can use with
            another service provider
          </p>
          <p className='sub-title'>
            f) Make a complaint to a Supervisory Authority.
          </p>
        </div>

        <div className='policy-section'>
          <h5 className='title'>11. Changes to this privacy policy</h5>
          <p className='sub-title'>
            This Privacy Policy may be updated from time to time. We encourage
            you to review this website for the latest information on our privacy
            practices. If there are any material changes to this Privacy Policy,
            you will be notified by posting a notice on the website prior to the
            change becoming effective. If you do not accept any changes made to
            this Privacy Policy, please discontinue the use of the website and
            the Services.
          </p>
        </div>

        <div className='footer-section'>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
