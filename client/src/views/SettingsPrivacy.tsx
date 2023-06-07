import React, { useState, useEffect } from 'react';

const SettingsPrivacy: React.FC = () => {
    const [toggleState, setToggleState] = useState<boolean>(() => {
        const storedToggleState = localStorage.getItem('toggleState');
        return storedToggleState ? JSON.parse(storedToggleState) : false;
    });
    const [showFooter, setShowFooter] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const handleToggle = () => {
        if (toggleState) {
            setShowPopup(true);
        } else {
            setToggleState(true);
            setShowFooter(true);
        }
    };

    const handleCancel = () => {
        setShowPopup(false);
    };

    const handleSave = () => {
        if (toggleState) {
            setToggleState(false);
            setShowFooter(false);
        } else {
            setToggleState(true);
            setShowFooter(true);
        }
        setShowPopup(false);
    };

    useEffect(() => {
        localStorage.setItem('toggleState', JSON.stringify(toggleState));
    }, [toggleState]);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (showFooter) {
            timer = setTimeout(() => {
                setShowFooter(false);
            }, 5000);
        }

        return () => {
            clearTimeout(timer);
        };
    }, [showFooter]);

    return (
        <div className="bg-[rgb(245,245,245)]">
            <div className="mx-auto max-w-[90%] md:max-w-[50%] lg:max-w-[40%] p-4">
                <br/>
                <h1 className="text-2xl font-bold text-start">Privacy and Data</h1>
                <br />
                <div className="bg-white p-3 mt-3 rounded-5xl" style={{ borderRadius: '1rem' }}>
                    <div className="bg-[rgb(241,247,245)] p-3 flex" style={{ borderRadius: '1rem' }}>
                        <p className="text-lg text-start">Sharing personal information for targeted advertising</p>

                        <button
                            className={`mt-3 mr-5 text-start ${toggleState ? 'bg-green-800' : 'bg-gray-500'
                                } text-white px-4 py-2 rounded`}
                            onClick={handleToggle}
                        >
                            {toggleState ? ' On' : 'Off'}
                        </button>
                    </div>

                    <p className="mt-3 text-start">
                        When toggled on, we may share your personal information with vendors and advertising partners to analyze and
                        show you promotions or ads that may interest you. You can update this at any time. This setting does not
                        impact your Rewards account, app experience, or Starbucks emails.
                    </p>
                </div>
                {showPopup && (
                    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                        <div className="bg-white p-5 rounded-lg text-start">
                            <div className="font-semibold text-xl">Confirm change:</div>
                            <br/>
                            <p>
                                By confirming, your personal information may <br/> be shared with vendors and advertising <br/> partners for targeted advertising.
                            </p>
                            <div className="mt-3 flex justify-end">
                                <button className="mr-2" onClick={handleCancel}>
                                    Cancel
                                </button>
                                <button onClick={handleSave}>Save</button>
                            </div>
                        </div>
                    </div>
                )}
                {showFooter && (
                    <div className="text-green mt-3 animate-slide-up">
                        Changes saved.
                    </div>
                )}
                <div>
                    <br />
                    <br />
                    <br />
                    <h1 className="text-2xl font-bold text-start">Help & Policies</h1>
                </div>
                <hr className="border-[rgb(212,232,225)] border-2" />
                <br />
                <p className="text-start">
                    At Starbucks, we approach data and privacy as we approach everything we do: we put people first. We believe that
                    taking care of you includes taking care of your data and privacy. We invite you to grab a cup of coffee and learn
                    more by reading our Privacy Notice in the link below.
                </p>
                <br />
                <div className="text-start">
                    <div>
                        <a href="#" style={{ textDecoration: 'underline', color: 'green' }}>
                            Privacy Notice
                        </a>
                    </div>
                    <div>
                        <a href="#" style={{ textDecoration: 'underline', color: 'green' }}>
                            Terms of Use
                        </a>
                    </div>
                    <div>
                        <a href="#" style={{ textDecoration: 'underline', color: 'green' }}>
                            Need Help
                        </a>
                    </div>
                </div>
                <br />
                <br />
                <br />
            </div>
        </div>
    );
};

export default SettingsPrivacy;
