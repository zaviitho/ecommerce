import { Button, Drawer } from '@mui/material';
import React, {  useState } from 'react';
import '../styles/modal-filter.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useDispatch, useSelector } from 'react-redux';
import { filterCategoryThunk, filterPrice } from '../redux/actions/productsActions';
import CloseIcon from '@mui/icons-material/Close';

const ModalFilter = () => {
    // const [openModal, setOpenModal]=useState(true);
    const [openPrice,setOpenPrice]=useState(true)
    const [openCategory,closeCategory] = useState(true)

    const dispatch = useDispatch();
    const [ priceFrom, setPriceFrom ] = useState("");
    const [ priceTo, setPriceTo ] = useState("");

    const productsFilter=useSelector(state=>state.products.productsFilter)

    const searchByPrice=e=>{
        e.preventDefault()
        dispatch(filterPrice({priceFrom, priceTo}))
        console.log(productsFilter)
    }
    // const searchByCategory=id=>{
    // dispatch(filterCategoryThunk(id))
    // closeCategory(!openCategory)
    // }
    
    
    
    

    const categories=useSelector(state=>state.categories)
    console.log(productsFilter)

    return (
        <div className='modal-content'>
            <Drawer
            variant='permanent'
            >
            <div><Button><CloseIcon/></Button></div>
            <div className='filter'>
                <div className='filter-price'>
                <p >Price</p>
                <Button onClick={()=>setOpenPrice(!openPrice)}>            
                    <KeyboardArrowDownIcon/>
                </Button>
                </div>
                <form action="" onSubmit={searchByPrice}>
                    <label className='label' htmlFor="from">From: </label>
                    <input className='input' type="number" id='from' value={priceFrom}  onChange={e => setPriceFrom(e.target.value)}/><br />
                    <label className='label' htmlFor="to">to: </label>
                    <input className='input' type="number" id='to' value={priceTo}  onChange={e => setPriceTo(e.target.value)}/><br />
                    <Button onClick={searchByPrice}>Filter price</Button>
                </form>
            </div>

             <div className='filter'>
                <div className='filter-category'>
                <p >Categories</p>
                <Button onClick={() =>closeCategory(!openCategory)}>
                    <KeyboardArrowDownIcon/>
                </Button>
                </div>
                
                {                   
                    categories.map(category=>(
                        <Button key={category.id} className='buttons-categories' onClick={()=>dispatch(filterCategoryThunk(category.id))}>{category.name}</Button>
                    ))
                }
                
            </div>
            </Drawer>
            
            
            
        </div>
    );
};

export default ModalFilter;