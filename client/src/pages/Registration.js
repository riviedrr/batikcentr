import React, { useState } from "react";
import styles from '../styles/auth.module.css';
import { registration } from '../components/http/userAPI';

const Registration = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const signIn = async () => {
        if (password !== confirmPassword) {
            setError("Пароли не совпадают");
            return;
        }
        setError("");
        setLoading(true);
        try {
            const response = await registration(email, password);
            console.log(response);
            setSubmitted(true);
        } catch (err) {
            setError(err.response?.data?.message || "Ошибка регистрации");
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "" || password === "" || confirmPassword === "") {
            setError("Пожалуйста, заполните все поля");
            return;
        }
        signIn();
    };

    return (
        <div className={styles.form}>
            <div>
                <h1>Регистрация</h1>
            </div>

            <div className={styles.messages}>
                {error && <div className={styles.error}><p>{error}</p></div>}
                {submitted && !error && (
                    <div className={styles.success}>
                        <p>Пользователь {email} успешно зарегистрирован!</p>
                    </div>
                )}
            </div>

            <form onSubmit={handleSubmit}>
                <label className={styles.label}></label>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.input}
                    value={email}
                    type="text"
                    placeholder="Логин"
                />

                <label className={styles.label}></label>
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.input}
                    value={password}
                    type="password"
                    placeholder="Пароль"
                />

                <label className={styles.label}></label>
                <input
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={styles.input}
                    value={confirmPassword}
                    type="password"
                    placeholder="Повторите пароль"
                />

                <button
                    type="submit"
                    className={styles.button}
                    disabled={loading}
                >
                    {loading ? "Загрузка..." : "Регистрация"}
                </button>
            </form>
        </div>
    );
};

export default Registration;
