import React, { useState } from "react";
import styles from "../styles/auth.module.css";
import { login } from "../components/http/userAPI"; 
import { REGISTRATION_ROUTE } from "../utilis/consts";

const Auth = observer(() => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            setError("Пожалуйста, заполните все поля");
            return;
        }
        setError("");
        setLoading(true);
        try {
            const response = await login(email, password);
            console.log(response); // Можно заменить на редирект или другие действия
        } catch (err) {
            setError(err.response?.data?.message || "Ошибка авторизации");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.form}>
            <div>
                <h1>Авторизация</h1>
            </div>

            {/* Сообщения об ошибке */}
            <div className={styles.messages}>
                {error && (
                    <div className={styles.error}>
                        <p>{error}</p>
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

                <label className={styles.label}>
                    <input type="checkbox" />
                    <span className={styles.checkmark}></span>
                    Запомнить меня
                </label>
                <a href="#">Забыли пароль?</a>

                <button
                    type="submit"
                    className={styles.button}
                    disabled={loading}
                >
                    {loading ? "Загрузка..." : "Вход"}
                </button>
                <p>
                    Нет аккаунта? <a href={REGISTRATION_ROUTE}>Регистрация</a>
                </p>
            </form>
        </div>
    );
});

export default Auth;
