import { ButtonHTMLAttributes, Slot, component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from '../../scss/button.scss?inline';

type TypeButton = 'primary' | 'default' | 'dashed' | 'text' | 'link';
type SizeButton = 'sm' | 'md' | 'lg';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    htmlType?: "reset" | "submit" | "button";
    type?: TypeButton;
    full?: boolean;
    size?: SizeButton;
}

export const Button = component$(({
    htmlType, 
    type = 'default',
    full = false,
    size = 'md',
    ...rest
}: ButtonProps) => {
    useStylesScoped$(styles);
    return <button 
    {...rest} class={[
        type,
        size,
        {'full': full}
    ]} 
    type={htmlType}><Slot /></button>
});