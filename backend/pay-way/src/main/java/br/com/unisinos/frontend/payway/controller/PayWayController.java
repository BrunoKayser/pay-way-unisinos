package br.com.unisinos.frontend.payway.controller;

import br.com.unisinos.frontend.payway.domain.Bill;
import br.com.unisinos.frontend.payway.domain.ListBill;
import br.com.unisinos.frontend.payway.service.ListBillService;
import br.com.unisinos.frontend.payway.service.SaveBillService;
import br.com.unisinos.frontend.payway.service.UpdateBillService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(value = "bill")
@Slf4j
public class PayWayController {

    @Autowired
    private SaveBillService saveBillService;

    @Autowired
    private ListBillService listBillService;

    @Autowired
    private UpdateBillService updateBillService;

    @GetMapping(path = "list/{email}")
    public ResponseEntity<ListBill> getValues(@PathVariable(name = "email") String email) {
        return ResponseEntity.ok(listBillService.listar(email));
    }

    @PostMapping
    public ResponseEntity<Void> save(@RequestBody Bill bill) {
        saveBillService.save(bill);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<Void> update(@RequestBody Bill billUpdate) {
        if (updateBillService.updateIsPayByEmailAndTitle(billUpdate)) {
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
