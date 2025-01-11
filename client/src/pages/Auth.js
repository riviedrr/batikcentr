import React, { useState } from "react";
import styles from "../styles/auth.module.css";
import { login } from "../components/http/userAPI"; 
import { REGISTRATION_ROUTE, SHOP_ROUTE } from "../utilis/consts";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../index";
import { useNavigate } from "react-router-dom";

const Auth = observer(() => {
    const { user } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

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
            user.setUser(user);
            user.setIsAuth(true);
            navigate(SHOP_ROUTE);
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
