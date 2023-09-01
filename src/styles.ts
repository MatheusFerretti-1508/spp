import styled, { createGlobalStyle } from "styled-components";


export const cores = {
    roxo: '#170638',
    laranja: '#ffaa00',
    branco: '#eeeeee'
}


const EstiloGlobal = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Josefin Sans', sans-serif;
    }
    
    body {
        background-color: ${cores.roxo};
        color: ${cores.branco};
    }
    
    .container {
        max-width: 1200px;
        margin: 0 auto;
    }
    `

    export const Introducao = styled.section`
        left: 30px;
        margin-top: 400px;
        margin-bottom: 200px;
        display: flex;

        @media (max-width: 768px) {
            margin-top: 200px;
        }

        h1 {
            background-color: ${cores.laranja};
            padding: 16px;
            font-size: 48px;
            font-weight: bolder;
            display: flex;
            align-items: center;
            text-align: center;
            height: 100px;
            width: 480px;
            margin-bottom: 16px;

            @media (max-width: 768px) {
                width: 300px;
                font-size: 27px;
            }
        }

        p {
            font-size: 24px;
            width: 600px;

            @media (max-width: 768px) {
                font-size: 16px;
                width: auto;
            }
        }

        img {
            right: 30px;
            position: absolute;
            height: 400px;
            rotate: 180deg;

            @media (max-width: 768px) {
                height: 180px;
                top: 400px;
            }
        }
    `

    export const Corpo = styled.section`
        right: 30px;
        position: absolute;
        display: flex;
        margin-bottom: 200px;

        h1 {
            background-color: ${cores.laranja};
            padding: 16px;
            font-size: 48px;
            font-weight: bolder;
            display: flex;
            align-items: center;
            text-align: center;
            justify-content: flex-end;
            height: 120px;
            width: 550px;
            margin-bottom: 16px;
            white-space: nowrap;

            @media (max-width: 768px) {
                width: 300px;
                font-size: 27px;
                padding-right: 4px;
                display: flex;
                position: absolute;
                right: -30px;
            }
        }

        p {
            font-size: 24px;
            width: 600px;

            @media (max-width: 768px) {
                font-size: 16px;
                width: auto;
                /* margin-top: 135px;
                margin-left: 50px;
                text-align: justify; */
                position: absolute;
                right: -10px;
                top: 135px;
                text-align: justify;
                width: 280px;
            }
        }
    `

    export const SetaComponent = styled.img`
            top: 60px;
            left: 30px;
            position: absolute;
            height: 350px;
            rotate: 180deg;

            @media (max-width: 768px) {
                height: 150px;
            }
    `

    export const Chamada = styled.section`
        top: 1100px;
        position: absolute;
        left: 350px;

        @media (max-width: 768px) {
                left: 0;
                top: 900px;
            }

        h1 {
            background-color: ${cores.laranja};
            padding: 16px;
            font-size: 48px;
            font-weight: bolder;
            display: flex;
            align-items: center;
            text-align: center;
            margin: 0 auto;
            height: 120px;
            width: 320px;
            margin-bottom: 16px;
            white-space: nowrap;

            @media (max-width: 768px) {
                font-size: 27px;
                width: 200px;
            }
        }

        h2 {
            margin-top: 24px;
            margin-bottom: 24px;

            @media (max-width: 768px) {
                font-size: 16px;
                display: flex;
                justify-content: center;
                margin-left: 15px;
            }
        }

        img {
            display: flex;
            justify-content: center;
            height: 300px;
            margin: 0 auto;

            @media (max-width: 768px) {
                height: 180px;
            }
        }
    `

export const FormularioContato = styled.form`
display: grid;
    
@media (max-width: 768px) {
        justify-content: center;
    }

label {
    margin-bottom: 8px;

    @media (max-width: 768px) {
        margin-left: 4px;
    }
}

input {
    margin-bottom: 8px;
    padding: 8px;
    height: 32px;
    outline: none;
    background: none;
    border: 2px solid ${cores.branco};
    border-radius: 8px;
    color: ${cores.branco};

    @media (max-width: 768px) {
                width: 100%;
                margin-left: 4px;
            }
}

textarea {
    margin-bottom: 16px;
    padding: 8px;
    resize: none;
    height: 104px;
    outline: none;
    background: none;
    border: 2px solid ${cores.branco};
    border-radius: 8px;
    color: ${cores.branco};

    @media (max-width: 768px) {
                width: 100%;
                margin-left: 4px;
            }
}

button {
    padding: 8px;
    background-color: ${cores.laranja};
    color: ${cores.branco};
    font-weight: bold;
    border: none;
    border-radius: 16px;
    cursor: pointer;
    width: 50%;
    margin: 0 auto;
    margin-bottom: 24px;
    font-size: 16px;

    &:hover {
        background-color: #f5bd4e;
    }

    @media (max-width: 768px) {
                width: 100%;
            }
}
`

export default EstiloGlobal