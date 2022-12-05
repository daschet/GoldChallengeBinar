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
                        <option value={`Medium`}>1-6 Orang</option>
                        <option value={`large`}>1-8 Orang</option>
                        </Input>
                    </div>
                    </div>
                    
                    <div className="filter">
                    <p>Harga Minimal</p>
                        <input
                            bsSize="sm"
                            type="select"
                            onChange={props.minPrice}
                            placeholder ={`Minimum Price`}
                        />
                    </div>
                    
                    <div className="filter">
                        <p>Harga Maksimal</p>
                        <input
                            bsSize="sm"
                            type="select"
                            onChange={props.maxPrice}
                            placeholder={`Maximum Price`}
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
                        <option value={``}>--</option>
                        <option value={true}>Tersedia</option>
                        <option value={false}>Tidak Tersedia</option>
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