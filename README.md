
## Тестовое задание в отдел Frontend-разработки компании [brave developers](https://bravedevelopers.com/)

### Задание 1: Задача на рефакторинг. Как бы вы могли улучшить код

Решение: function refactorFunc(s,a,b) {
            if (a.length>1) { a = null }
            if (b.length>1) { b = null }
            return  Math.max(s.lastIndexOf(a,s.length),s.lastIndexOf(b,s.length))
         }

### Задание 2: Web приложение — терминал оплаты мобильного телефона.

Приложение создано с использованием следующих технологий:
- TypeScript
- Next.js
- React и React Hooks
- Styled-Components

### Посмотреть работу приложения можно по ссылке [Платежный терминал](https://payment-terminal-brave.vercel.app/)
