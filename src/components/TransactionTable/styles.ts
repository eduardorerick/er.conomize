import styled from "styled-components";

export const Container = styled.div`
    margin-top:1rem;

    table {
        width:100%;
        border-spacing: 0 0.5rem;
        
        th {
            color: var(--text-body);
            font-weight: 400;
            padding:1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td {
            padding: 1rem 2rem;
            border:0;
            background: var(--shape);
            color: var(--text-body);
            border-radius:0.25rem;

            &:first-child {
                color: var(--text-title);
            }

            &.deposit {
                color: var(--green);
            }

            &.withdraw {
                color: var(--red);
            }
        }
    }
`

export const ToggleButton = styled.button`
    margin-bottom: 10px;
    font-size:1rem;
    color:#fff;
    background: var(--blue-light);
    border:0;
    padding: 0 1rem;
    border-radius:0.25rem;
    height:2rem;
`