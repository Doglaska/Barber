import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import authServices from "../../services/auth";
import appointmentServices from "../../services/appointment";
import styles from './page.module.css';
import Loading from "../loading/page";

export default function Profile() {
    const { logout } = authServices();
    const { getUserAppointments } = appointmentServices();
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const authData = JSON.parse(localStorage.getItem('auth'));

    useEffect(() => {
        if (authData) {
            getUserAppointments(authData.user._id).then((data) => {
                setAppointments(data); // Agora `data` será um array
                setLoading(false);
            });
        } else {
            navigate('/auth');
        }
    }, [authData, navigate]);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className={styles.pageContainer}>
            <h1>{authData?.user?.fullname}</h1>
            <h3>{authData?.user?.email}</h3>
            <button onClick={logout}>Logout</button>

            {appointments.length > 0 ? (
                <div className={styles.appointmentsContainer}>
                    {appointments.map((appointment) => (
                        <div key={appointment._id} className={styles.appointment}>
                            <h3>Agendamento: {appointment.scheduledTime} com {appointment.barberName}</h3>
                            <p>Serviço: {appointment.serviceName}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Você ainda não possui agendamentos.</p>
            )}
        </div>
    );
}
