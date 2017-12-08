<?php
abstract class Mapper {
    protected $db;
    public function __construct($db) {
        $this->db = $db;
    }
}


class IndividualMovie extends Mapper
{
    public function currentMovie ($movieName) {
	   	$sql = 'SELECT a.movie_id, a.movie_name, a.movie_thumb, a.movie_img_lg, a.movie_release_date, a.movie_rating, b.movie_description, b.movie_video_id, GROUP_CONCAT(d.genre SEPARATOR ", ") as genre
				FROM movies AS a
				LEFT JOIN movie_details AS b
				ON a.movie_id = b.movie_name_id
				LEFT JOIN movie_to_genre AS c ON a.movie_id = c.movie_id
				LEFT JOIN movie_genre AS d ON c.genre_id = d.genre_id
				WHERE url_param like "'. $movieName .'"';
	   	$stmt = $this->db->prepare($sql);
	    //$resultCheckUser = $dbh->query($sqlCheckUser);

	    $result = $stmt->execute();

		$results = [];
        while($result2 = $stmt->fetch()) {
            $results[] = $result2;
        }
	    print_r(json_encode($results));
	}
}

class AllMovies extends Mapper 
{
	public function getAllMovies () {
		$sql = "SELECT a.movie_id, a.movie_name, a.movie_thumb, a.movie_img_lg, a.movie_release_date, a.movie_rating, b.movie_description, a.url_param
				FROM movies as a
				LEFT JOIN movie_details as b
				ON a.movie_id = b.movie_name_id
				ORDER BY a.movie_name ASC";
		$stmt = $this->db->prepare($sql);
		$result = $stmt->execute();
		$results = [];
        while($result2 = $stmt->fetch()) {
            $results[] = $result2;
        }
	    print_r(json_encode($results));
	}
}

?>