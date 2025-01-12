// SwiperComponent.jsx
import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

export const ExperienceSection = () => {
    useEffect(() => {
        new Swiper('.swiper', {
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            },
        });
    }, []);
    const experiences = [
        {
            position: 'Project Management - Devops',
            institution: 'DRINUX',
            period: '2023 - 2024',
        },
        {
            position: 'Jefe del area de Sistemas',
            institution: 'Universidad Nacional de Ingeniería',
            period: '2022 - 2023',
        },
        {
            position: 'Project Management - Devops',
            institution: 'DRINUX',
            period: '2018 - 2022',
        },
        {
            position: 'Analista de Sistemas',
            institution: 'Universidad Nacional de Ingeniería',
            period: '2010 - 2017',
        },
        {
            position: 'Programador',
            institution: 'Facultad de arquitectura de la UNI',
            period: '2007 - 2009',
        },
    ];


    return (
        <section className="experience-section">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Mi Experiencia</h2>
                <div className="swiper">
                    <div className="swiper-wrapper">
                        {experiences.map((experience, index) => (
                            <div key={index} className="swiper-slide">
                                <div className="experience-card border border-blue-400 rounded shadow-lg m-8 p-10">
                                    <h3 className='text-1xl font-bold primary'>{experience.position}</h3>
                                    <p className='font-bold'>{experience.institution}</p>
                                    <p className='text-blue-500'>{experience.period}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </div>
        </section>
    );
};

