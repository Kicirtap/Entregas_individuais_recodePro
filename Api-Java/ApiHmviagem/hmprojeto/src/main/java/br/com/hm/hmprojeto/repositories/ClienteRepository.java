package br.com.hm.hmprojeto.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import br.com.hm.hmprojeto.model.Cliente;



@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long>{

}

