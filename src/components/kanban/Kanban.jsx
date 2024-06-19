import React from 'react';
import { ContainerKanban } from './Style';
import { useNavigate } from 'react-router-dom';
import Velocimetro from "./Velocimetro.js"


const COMPANIES = {
    "copa dor": {
        nome: "Copa D'Or",
        status: "calibragem",
        pacientes: "23/70"
    },
    "cdpi": {
        nome: "CDPI",
        status: "relatório",
        pacientes: "52/80"
    },
    "barra dor": {
        nome: "Barra D'Or",
        status: "calibragem",
        pacientes: "69/90"
    },
    "miguel couto": {
        nome: "Miguel Couto",
        status: "finalizado",
        pacientes: "70/70"
    },
    "americas": {
        nome: "Americas",
        status: "backlog",
        pacientes: "0/30"
    }
};

const Kanban = () => {
    const statuses = ['backlog', 'calibragem', 'relatório', 'finalizado'];
    const navigate = useNavigate();

    const companiesByStatus = statuses.reduce((acc, status) => {
        acc[status] = Object.values(COMPANIES).filter(company => company.status === status);
        return acc;
    }, {});

    const handleColumnClick = (status) => {
        const paths = {
            'calibragem': '/calibragem',
            'relatório': '/relatorio',
        };
        navigate(paths[status]);
    };

    const getCurrentAndTotalPatients = (pacientes) => {
        const [current, total] = pacientes.split('/').map(Number);
        return { current, total };
    };

    return (
        <ContainerKanban>
            <div className="kanban-board">
                {statuses.map((status) => (
                    <div 
                        key={status}
                        className="kanban-column"
                        onClick={() => handleColumnClick(status)}
                    >
                        <h2>{status.toUpperCase()}</h2>
                        {companiesByStatus[status].map((company) => {
                            const { current, total } = getCurrentAndTotalPatients(company.pacientes);
                            return (
                                <div key={company.nome} className="kanban-task">
                                    <strong>{company.nome}</strong>
                                    <p>Pacientes: {company.pacientes}</p>
                                    <Velocimetro total={total} current={current} />
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </ContainerKanban>
    );
};

export default Kanban;
