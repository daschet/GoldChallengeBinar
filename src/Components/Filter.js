import'bootstrap/dist/css/bootstrap.min.css';
import { Input } from 'reactstrap';
const Filter = (props) => {
    return (
        <div>
            <div className='filterBack'>
                <div className="filterCont">
                    <div className="filter1">
                        <p>Nama Mobil</p>
                        <input
                        onChange={props.nameFilter}
                        >
                        </input>
                    </div>
                    
                    <div className="filter">
                        <p>Kategori</p>
                        <div>
                        <Input className='form' 
                            bsSize="sm"
                            type="select"
                            onChange={props.categoryFilter}
                            placeholder = {`Input Category`}
                        >
                        <option value={``}>--</option>
                        <option value={`small`}>1-4 Orang</option>
                        <option value={`medium`}>1-6 Orang</option>
                        <option value={`large`}>1-8 Orang</option>
                        </Input>
                    </div>
                    </div>
                    
                    <div className="filter">
                        <p>Harga</p>
                        <input
                            bsSize="sm"
                            type="select"
                            className={props.maxPrice}
                            placeholder={`Maximum Price`}
                        />
                        <option>

                        </option>
                    </div>
                    
                    <div className="filter">
                    <p> </p>
                        <input
                            bsSize="sm"
                            type="select"
                            className ={props.minPrice}
                            placeholder ={`Minimum Price`}
                        />
                    </div>

                    <div className="filter">
                        <p>Status</p>
                        <Input className='form' 
                            bsSize="sm"
                            type="select"
                            onChange={props.categoryStatus}
                            placeholder = {`Input Status`}
                        >
                        <option value={true}>Disewakan</option>
                        <option value={false}>Tersedia</option>
                        </Input>
                    </div>
                    
                    <button 
                    onClick={props.handleSearch}
                    className="filterButton">
                        <p>Cari Mobil</p>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Filter;