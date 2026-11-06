import {useState} from 'react';
import {Box, Typography, TextField, Button, styled} from '@mui/material';
import {saveInvoice} from '../services/api';

const Component = styled(Box) ({
    marginTop: 20,
    '&> p' : {
        fontSize: 24,
        marginBottom: 10
    },
    '&> div> div' : {
        marginRight: 20,
        minWidth: 200
    }
})

const defaultobj={
    vendor:'',
    product:'',
    amount:0,
    date:'',
    action: 'pending'
}

const AddInvoice = ({ setAddInvoice })  => {
    const [invoice, setInvoice] = useState(defaultobj);

    const onValueChange = (e) => {
        setInvoice({...invoice, [e.target.name]: e.target.value})
    }
    
    const addnewInvoice = async () => {
        //api call
        await saveInvoice({...invoice, amount: Number(invoice['amount']) });
    setAddInvoice(false);
    }

  return (
    <Component>
      <Typography>Add Invoice</Typography>
      <Box>
        <TextField
             variant="standard"
             placeholder="Vendor name"
             onChange={(e) => onValueChange(e)}
             name='vendor'
             autoComplete="off"
        />
        <TextField
             variant="standard"
             placeholder="Product name"
             onChange={(e) => onValueChange(e)}
             name='product'
             autoComplete="off"
        />
        <TextField
             variant="standard"
             placeholder="Enter Amount"
             type="number"
             onChange={(e) => onValueChange(e)}
             name='amount'
             autoComplete="off"
        />
        <TextField
             variant="standard"
             placeholder="Date of Invoice"
             type="date"
             onChange={(e) => onValueChange(e)}
             name='date'
             autoComplete="off"
        />
        <Button 
        variant="contained" color="primary"
        onClick={() => addnewInvoice()}
        >
            Add
        </Button>
       
      </Box>
    </Component>
  )
}

export default AddInvoice;

