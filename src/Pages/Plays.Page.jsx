import React from "react";
import PlayFilter from "../components/PlayFilter/PlayFilter.Component";
import Poster from "../Poster/Poster.Component";

const Plays = () => {
    return(
    <>
        <div className="container mx-auto my-9">
            <div className="w-full lg:flex my-3 lg:flex-row-reverse gap-5">
                <div className="lg:w-3/4 bg-white rounded p-5">
                    <h2 className="text-2xl font-bold mb-4">
                        Plays in Jhansi
                    </h2>
                    <div className="flex flex-wrap">
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                            <Poster
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-30,otc-FFFFFF,oy-620,ox-24/et00314534-zjzubzamfs-portrait.jpg"
                                title="Tvk Cultural presents Ponniyin Selvan"
                                subTitle="Watch on Zoom"
                            />
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                            <Poster
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-30,otc-FFFFFF,oy-620,ox-24/et00314534-zjzubzamfs-portrait.jpg"
                                title="Tvk Cultural presents Ponniyin Selvan"
                                subTitle="Watch on Zoom"
                            />
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                            <Poster
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-30,otc-FFFFFF,oy-620,ox-24/et00314534-zjzubzamfs-portrait.jpg"
                                title="Tvk Cultural presents Ponniyin Selvan"
                                subTitle="Watch on Zoom"
                            />
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                            <Poster
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-30,otc-FFFFFF,oy-620,ox-24/et00314534-zjzubzamfs-portrait.jpg"
                                title="Tvk Cultural presents Ponniyin Selvan"
                                subTitle="Watch on Zoom"
                            />
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                            <Poster
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-30,otc-FFFFFF,oy-620,ox-24/et00314534-zjzubzamfs-portrait.jpg"
                                title="Tvk Cultural presents Ponniyin Selvan"
                                subTitle="Watch on Zoom"
                            />
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                            <Poster
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-30,otc-FFFFFF,oy-620,ox-24/et00314534-zjzubzamfs-portrait.jpg"
                                title="Tvk Cultural presents Ponniyin Selvan"
                                subTitle="Watch on Zoom"
                            />
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                            <Poster
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-30,otc-FFFFFF,oy-620,ox-24/et00314534-zjzubzamfs-portrait.jpg"
                                title="Tvk Cultural presents Ponniyin Selvan"
                                subTitle="Watch on Zoom"
                            />
                        </div>
                    </div>
                </div>

                <div className='lg:w-3/12 bg-white rounded p-5'>
                    <h2 className='text-2xl font-bold mb-4'>Filters</h2>
                    <div className='my-2'>
                        <PlayFilter title='Date' tags={["Today", "Tomorrow", "This Weekend"]} />
                    </div>
                    <div className='my-2'>
                        <PlayFilter title='Language' tags={["Hindi", "English", "Punjabi"]} />
                    </div>
                </div>
            </div>
        </div>
    </>);
};

export default Plays;
