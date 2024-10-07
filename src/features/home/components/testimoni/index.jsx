import Image from "next/image"

export default function Testimoni() {
    return (
        <>
            <div className="flex items-center py-10 lg:py-0 lg:pt-28">
                <span className="flex-grow border-b border-gray-400"></span>
                <span className="mx-2 font-bold text-2xl text-gray-700">TESTIMONI</span>
                <span className="flex-grow border-b border-gray-400"></span>
            </div>

            <main className="flex flex-col lg:flex-row md:px-4 items-center">
                <div className="sm:lg:max-w-sm p-6 bg-white rounded-lg border border-gray-300 drop-shadow-lg mx-auto my-4 lg:my-14">
                    <div className="relative bg-neutral-500 text-white p-4 rounded-t-lg">
                        <p className="text-lg italic">There are many benefit that i got from joining TSM.
                            That really directly impact to me, my english skill is much better than 3 years ago (2016).
                            Lot of improvement I felt, now i have more confidence when using english in conversation, presentation
                            skill improved since the study method in this campus concerning in presentation, and so on. The
                            study method and culture that applied in TSM really help me to get this improvement.”
                        </p>
                    </div>

                    <div className="flex items-center mt-4">
                        <div className="w-12 h-fit bg-gradient-to-r from-purple-400 to-blue-500 rounded-full flex justify-center items-center overflow-hidden">
                            <Image
                                src="https://img.freepik.com/free-photo/serious-young-african-man-standing-isolated_171337-9633.jpg"
                                alt="kevin"
                                height={100}
                                width={100}
                                className="object-cover w-full h-full "
                            />
                        </div>
                        <div className="ml-4">
                            <p className="text-lg font-semibold">Kevin Edrick</p>
                            <p className="text-black">(Batch 2016)</p>
                        </div>
                    </div>
                </div>
                <div className="sm:lg:max-w-sm p-6 bg-white rounded-lg border border-gray-300 drop-shadow-lg mx-auto my-4 lg:my-14">
                    <div className="relative bg-neutral-500 text-white p-4 rounded-t-lg">
                        <p className="text-lg italic">I get a lot of experience while I’m in TSM. The lecturers in TSM are super supportive, it is more important to us the be brave and speak up for ourselves instead of the grammar we’re using. This is a great opportunity for us to join international class because where else can we get such opportunities and partners to do a conversation in English while carrying out our obligation as students.”
                        </p>
                    </div>

                    <div className="flex items-center mt-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full flex justify-center items-center overflow-hidden">
                            <Image
                                src="https://img.freepik.com/premium-photo/asian-girls-education-happy-beautiful-asian-girl-is-smilling_911620-8519.jpg"
                                alt="sherlia"
                                height={100}
                                width={100}
                                className="object-cover w-full h-full "
                            />
                        </div>
                        <div className="ml-4">
                            <p className="text-lg font-semibold">Sherlia Lie</p>
                            <p className="text-black">(Batch 2018)</p>
                        </div>
                    </div>
                </div>
                <div className="sm:lg:max-w-sm p-6 bg-white rounded-lg border border-gray-300 drop-shadow-lg mx-auto my-4 lg:my-14">
                    <div className="relative bg-neutral-500 text-white p-4 rounded-t-lg">
                        <p className="text-lg italic">Our campus is a great place to learn and grow. The facilities are modern, and the library and labs help students succeed in their studies. The green spaces around the campus make it a calm and relaxing place to spend time. The friendly community here makes it easy to meet new people and feel at home. I’ve had a wonderful experience and feel well-supported both academically and personally.
                        </p>
                    </div>

                    <div className="flex items-center mt-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full flex justify-center items-center overflow-hidden">
                            <Image
                                src="https://img.freepik.com/premium-photo/young-happy-asian-student-headshot-attractive-smiling-asian-woman-with-friends-university_817921-1863.jpg"
                                alt="sherlia"
                                height={100}
                                width={100}
                                className="object-cover w-full h-full "
                            />
                        </div>
                        <div className="ml-4">
                            <p className="text-lg font-semibold">Ellen</p>
                            <p className="text-black">(Batch 2019)</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}