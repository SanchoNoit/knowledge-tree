package es.jn.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import es.jn.entidades.TemaDeEstudio;

@RepositoryRestResource(path = "temas", itemResourceRel = "tema", collectionResourceRel = "temas")
public interface TemaDAO extends JpaRepository<TemaDeEstudio, Long> {
	
}
	
