import React from 'react';

const SettingsPrivacy: React.FC = () => {
    return (
        <div className="mx-auto max-w-[90%] md:max-w-[50%] lg:max-w-[40%] bg-[rgb(245,245,245)] p-4">
            <h1 className="text-2xl font-bold">Privacy and Data</h1>
            <br />
            <div className="bg-white p-3 mt-3 rounded-5xl" style={{border:'10rem'}}>
                <div className="bg-[rgb(241,247,245)] p-3">
                    <p className="text-lg">Sharing personal information for targeted advertising</p>
                </div>
                <p className="mt-3">
                    When toggled on, we may share your personal information with vendors and advertising partners to analyze and
                    show you promotions or ads that may interest you. You can update this at any time. This setting does not
                    impact your Rewards account, app experience, or Starbucks emails.
                </p>
            </div>
            <div>
                <br />
                <br />
                <br />
                <h1 className="text-2xl font-bold">Help & Policies</h1>
            </div>
            <hr className="border-[rgb(212,232,225)]" />
            <br />
            <p>
                At Starbucks, we approach data and privacy as we approach everything we do: we put people first. We believe that
                taking care of you includes taking care of your data and privacy. We invite you to grab a cup of coffee and learn
                more by reading our Privacy Notice in the link below.
            </p>
            <br />
            <a href="#">Privacy Notice</a>
            <br />
            <a href="#">Terms of Use</a>
            <br />
            <a href="#">Need Help</a>
            <br />
            <br />
            <br />
        </div>
    );
};

export default SettingsPrivacy;
