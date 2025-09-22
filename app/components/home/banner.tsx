export function BannerLink({ photo = "", logoname = "" }) {
    return (
        <div className="flex justify-center items-center">
                <img 
                    src={photo} 
                    alt={logoname} 
                    className="grayscale hover:grayscale-0 transition-transform duration-300 hover:scale-110" 
                />
            </div>
    );
}
