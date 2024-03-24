import React, {FC} from 'react';

interface IType {
    isActive?: boolean
}

export const FavoritesIcon: FC<IType> = ({isActive}) => {
    return (
        <>
            {
                isActive ?
                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.08352 13.2212L7.16073 13.2931C7.41399 13.5337 7.74754 13.6649 8.09344 13.6649C8.43935 13.6649 8.7729 13.5306 9.02616 13.2931L9.10337 13.2212L14.5143 8.13682C15.4625 7.24619 15.9999 5.99619 15.9999 4.68682V4.58369C15.9999 2.38369 14.4557 0.493066 12.3184 0.0805664C11.1016 -0.153809 9.85695 0.130566 8.86556 0.836816C8.74202 0.924316 8.62466 1.01807 8.51039 1.11807C8.36214 1.24619 8.22316 1.38369 8.09344 1.53369C7.85872 1.26807 7.59929 1.03682 7.32133 0.836816C6.32994 0.130566 5.08529 -0.153809 3.86844 0.0836914C1.73124 0.496191 0.187012 2.38369 0.187012 4.58369V4.68682C0.187012 5.99619 0.724402 7.24619 1.67256 8.13682L7.08352 13.2212Z"
                            />
                    </svg>
                    :

                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.16073 13.2931L7.08352 13.2212L1.67256 8.13682C0.724402 7.2462 0.187012 5.9962 0.187012 4.68682V4.5837C0.187012 2.3837 1.73124 0.496198 3.86844 0.0836979C5.08529 -0.153802 6.32994 0.130573 7.32133 0.836823C7.59929 1.03682 7.85872 1.26807 8.09344 1.5337C8.22316 1.3837 8.36214 1.2462 8.51039 1.11807C8.62466 1.01807 8.74202 0.924323 8.86556 0.836823C9.85695 0.130573 11.1016 -0.153802 12.3184 0.080573C14.4557 0.493073 15.9999 2.3837 15.9999 4.5837V4.68682C15.9999 5.9962 15.4625 7.2462 14.5143 8.13682L9.10337 13.2212L9.02616 13.2931C8.7729 13.5306 8.43935 13.6649 8.09344 13.6649C7.74754 13.6649 7.41399 13.5337 7.16073 13.2931ZM7.5715 3.19307C7.55914 3.1837 7.54988 3.1712 7.54061 3.1587L6.99087 2.5337L6.98778 2.53057C6.27435 1.7212 5.19648 1.35245 4.1464 1.55557C2.70719 1.8337 1.66947 3.10245 1.66947 4.5837V4.68682C1.66947 5.57745 2.03699 6.43057 2.68248 7.03682L8.09344 12.1212L13.5044 7.03682C14.1499 6.43057 14.5174 5.57745 14.5174 4.68682V4.5837C14.5174 3.10557 13.4797 1.8337 12.0436 1.55557C10.9935 1.35245 9.91254 1.72432 9.2022 2.53057C9.2022 2.53057 9.2022 2.53057 9.19911 2.5337C9.19602 2.53682 9.19911 2.5337 9.19602 2.53682L8.64628 3.16182C8.63701 3.17432 8.62466 3.1837 8.61539 3.1962C8.47641 3.33682 8.28802 3.41495 8.09344 3.41495C7.89887 3.41495 7.71048 3.33682 7.5715 3.1962V3.19307Z"
                            />
                    </svg>

            }
        </>


    );
};
