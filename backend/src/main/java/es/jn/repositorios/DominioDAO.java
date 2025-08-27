package es.jn.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import es.jn.entidades.DominioDeConocimiento;

@RepositoryRestResource(path = "dominios", itemResourceRel = "dominio", collectionResourceRel = "dominios")
public interface DominioDAO extends JpaRepository<DominioDeConocimiento, Long> {
	
	
}
	
