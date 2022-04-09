package br.com.unisinos.frontend.payway.service;

import br.com.unisinos.frontend.payway.domain.Bill;
import br.com.unisinos.frontend.payway.domain.ListBill;
import br.com.unisinos.frontend.payway.repository.BillRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class SaveBillService {

    @Autowired
    private BillRepository billRepository;

    public void save(Bill bill) {
        try {
            billRepository.save(bill);
            log.info("==========Salvou conta {} do(a) usuário(a): {}", bill.getTitle(), bill.getEmail());
        } catch(Exception e) {
            log.error("Erro ao tentar salvar conta: {}", bill, e);
        }
    }

}
