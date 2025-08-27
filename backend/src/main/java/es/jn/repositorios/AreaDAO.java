package es.jn.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import es.jn.entidades.AreaDeConocimiento;
import es.jn.entidades.DominioDeConocimiento;

import java.util.List;


@RepositoryRestResource(path = "areas", itemResourceRel = "area", collectionResourceRel = "areas")
public interface AreaDAO extends JpaRepository<AreaDeConocimiento, Long> {
	
	@RestResource(path ="dominio")
	List<AreaDeConocimiento> findByDominio(DominioDeConocimiento dominio);
	
	
	
}
	
