import anwser from '../../src/animation2/Questions-bro.svg'
const AboutQueries = () => {
    return (
        <div className="p-5">
            <h2 className="text-2xl font-bold text-center py-4 mb-4 border-b">About Queries - <span className='text-[#EF4444]'>Quora BD</span></h2>
            <div className="grid md:grid-cols-2 items-center gap-4">
                <div>
                    <img className='w-11/12 hidden md:block' src={anwser} alt="" />
                </div>
            <div className=" space-y-2">
                <div className="collapse collapse-arrow dark:bg-gray-700 bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">What is Quora BD?</div>
                    <div className="collapse-content">
                        <p>Quora BD is a Bengali-based question-and-answer platform where users can ask and answer various topics.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow dark:bg-gray-700 bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Who can use Quora BD?</div>
                    <div className="collapse-content">
                        <p>It is open to everyone. Anyone can participate to share and gain knowledge.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow dark:bg-gray-700 bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">How can I ask a question?</div>
                    <div className="collapse-content">
                        <p>You can easily post a new question on our platform. Just click the Ask Question button and type your query.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow dark:bg-gray-700 bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Is Quora BD free to use?</div>
                    <div className="collapse-content">
                        <p>Yes, Quora BD is completely free for all users.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow dark:bg-gray-700 bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Can I answer questions on Quora BD?</div>
                    <div className="collapse-content">
                        <p>Yes, users can answer any question that they have knowledge about.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow dark:bg-gray-700 bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">How can I edit or delete my question?</div>
                    <div className="collapse-content">
                        <p>You can edit or delete your question from your profile page.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow dark:bg-gray-700 bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Does Quora BD have moderation?</div>
                    <div className="collapse-content">
                        <p>Yes, moderators review content to ensure quality discussions.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow dark:bg-gray-700 bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Can I report inappropriate content?</div>
                    <div className="collapse-content">
                        <p>Yes, there is a report option to flag inappropriate content.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow dark:bg-gray-700 bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Can I use Quora BD on mobile?</div>
                    <div className="collapse-content">
                        <p>Yes, Quora BD is mobile-friendly and works on all devices.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow dark:bg-gray-700 bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">How can I contact Quora BD support?</div>
                    <div className="collapse-content">
                        <p>You can contact support through the Contact Us page on the website.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default AboutQueries;
