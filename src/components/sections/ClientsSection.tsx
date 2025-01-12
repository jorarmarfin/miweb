import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export const ClientsSection = () => {
    const clients = [
        { id: 1, logo: "/clients/institutobigbright.jpg" },
        { id: 1, logo: "/clients/cliente_drinux.png" },
        { id: 1, logo: "/clients/cliente_mb.png" },
        { id: 1, logo: "/clients/padresPeruanos.png" },
        { id: 1, logo: "/clients/uni.png" },
        { id: 1, logo: "/clients/utp.png" },
        { id: 1, logo: "/clients/willy.png" }
        ];

    return (
        <div className="py-12 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Clientes Que Confían En Mí</h2>
                <p className="text-gray-300 mb-8">
                    Ha sido un privilegio colaborar con empresas y profesionales que comparten nuestra pasión por la tecnología. Juntos, hemos construido soluciones que marcan la diferencia.
                </p>
                <div className="w-full">
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        spaceBetween={30}
                        slidesPerView={4}
                        loop={true}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 4 },
                        }}
                    >
                        {clients.map((client, index) => (
                            <SwiperSlide key={index}>
                                <div className="w-48 h-24 bg-white border border-gray-300 rounded-lg shadow-md flex items-center justify-center mx-auto">
                                    <img src={client.logo} alt={`Logo ${client.id}`} className="max-w-[80%] max-h-[80%] object-contain" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

