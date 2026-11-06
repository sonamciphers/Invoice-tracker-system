import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import { Box, Typography, Button } from '@mui/material';
import AddInvoice from '../components/AddInvoice';
import Invoices from '../components/Invoices';
import { getAllInvoice, deleteInvoice } from '../services/api';

const Home = () => {
    const [addInvoice, setAddInvoice] = useState(false);  

    useEffect(() => {
        const getData = async () => {
            const response = await getAllInvoice();
            //api call to get invoices
            setInvoices(response.data);
        }
        getData();
    }, [addInvoice]);

    const[invoices, setInvoices] = useState([]);
    const toggleInvoice = () => {
        setAddInvoice(true);
    }
    const removeInvoice = async (id) => {
       await deleteInvoice(id);
        const updatedInvoice = invoices.filter(invoice => invoice.id !== id);
        
        setInvoices(updatedInvoice);
    }

    return (
        <>
             <Header/>
             <Box style={{ padding: '20px' }}>
                 <Typography variant="h4">Welcome to the Invoice System</Typography>
                 {!addInvoice && 
                  <Button 
                            variant="contained" 
                            onClick={() => toggleInvoice()}
                            style={{ marginTop: 15 }}
                        >Add Invoice</Button>
                }   
                 {addInvoice && <AddInvoice setAddInvoice={setAddInvoice}/>}
                 <Box>
                    <Invoices invoices={invoices} 
                    removeInvoice={removeInvoice}
                    />
                 </Box>
                
             </Box>
       </>

    )
}
export default Home;