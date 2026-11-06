package com.invoiceprocessingsystem.server.dao;

import com.invoiceprocessingsystem.server.model.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvoiceDao extends JpaRepository<Invoice, Long> {
}
