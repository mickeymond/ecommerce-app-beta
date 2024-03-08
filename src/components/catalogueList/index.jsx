
export default function CatalogueList({ title, images, description, price }) {
    return (
        <section className="md:container md:mx-auto">
            <div>
                <div className="h-90 w-64 card rounded overflow-hidden shadow-md">
                    <div>
                        <img src={images} alt={title} className="w-full sm:h-48 object-cover" />
                    </div>
                    <div className="m-4">
                        <span className="font-bold"> {title} </span>
                        <span className="block"> {description} </span>
                    </div>
                    <div className="m-4">
                        <span className="font-bold"> GHS {price} </span>
                    </div>
                    <div>
                        <span>Add to cart</span>
                    </div>
                </div>

            </div>

        </section>
    );
}